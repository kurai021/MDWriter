'use strict';

var SMTPConnection = require('smtp-connection');
var packageData = require('../package.json');
var wellknown = require('nodemailer-wellknown');
var clone = require('clone');
var PoolResource = require('./pool-resource');
var EventEmitter = require('events').EventEmitter;
var util = require('util');
var shared = require('nodemailer-shared');

// expose to the world
module.exports = function (options) {
    return new SMTPPool(options);
};

/**
 * Creates a SMTP pool transport object for Nodemailer
 *
 * @constructor
 * @param {Object} options SMTP Connection options
 */
function SMTPPool(options) {
    EventEmitter.call(this);

    var hostData;

    if (options && typeof options === 'string') {
        options = {
            url: options
        };
    }

    this.options = options && clone(options) || {};

    if (this.options.service && (hostData = wellknown(this.options.service))) {
        Object.keys(hostData).forEach(function (key) {
            if (!(key in this.options)) {
                this.options[key] = hostData[key];
            }
        }.bind(this));
    }

    // parse a configuration URL into configuration options
    if (this.options.url) {
        hostData = shared.parseConnectionUrl(this.options.url);
        Object.keys(hostData).forEach(function (key) {
            if (!(key in this.options)) {
                this.options[key] = hostData[key];
            }
        }.bind(this));
    }

    this.options.maxConnections = this.options.maxConnections || 5;
    this.options.maxMessages = this.options.maxMessages || 100;

    this.logger = this.options.logger = shared.getLogger(this.options);

    // temporary object
    var connection = new SMTPConnection(this.options);

    this.name = 'SMTP (pool)';
    this.version = packageData.version + '[client:' + connection.version + ']';

    this._rateLimit = {
        counter: 0,
        timeout: null,
        waiting: [],
        checkpoint: false
    };
    this._closed = false;
    this._queue = [];
    this._connections = [];
    this._connectionCounter = 0;
}
util.inherits(SMTPPool, EventEmitter);

/**
 * Queues an e-mail to be sent using the selected settings
 *
 * @param {Object} mail Mail object
 * @param {Function} callback Callback function
 */
SMTPPool.prototype.send = function (mail, callback) {
    this._queue.push({
        mail: mail,
        callback: callback
    });
    this._processMessages();
};

/**
 * Closes all connections in the pool. If there is a message being sent, the connection
 * is closed later
 */
SMTPPool.prototype.close = function () {
    var connection;
    var len = this._connections.length;
    this._closed = true;

    // clear rate limit timer if it exists
    clearTimeout(this._rateLimit.timeout);

    // remove all available connections
    for (var i = len - 1; i >= 0; i--) {
        if (this._connections[i] && this._connections[i].available) {
            connection = this._connections[i];
            connection.close();
            this.logger.info('Connection #%s removed', connection.id);
        }
    }

    if (len && !this._connections.length) {
        this.logger.debug('All connections removed');
    }
};

/**
 * Check the queue and available connections. If there is a message to be sent and there is
 * an available connection, then use this connection to send the mail
 */
SMTPPool.prototype._processMessages = function () {
    var connection;

    if (!this._queue.length || this._closed) {
        return;
    }

    // find first available connection
    for (var i = 0, len = this._connections.length; i < len; i++) {
        if (this._connections[i].available) {
            connection = this._connections[i];
            break;
        }
    }

    if (!connection && this._connections.length < this.options.maxConnections) {
        connection = this._createConnection();
    }

    if (!connection) {
        return;
    }

    var element = connection.queueElement = this._queue.shift();
    element.messageId = (connection.queueElement.mail.message.getHeader('message-id') || '').replace(/[<>\s]/g, '');

    connection.available = false;

    this.logger.debug('Assigned message <%s> to #%s (%s)', element.messageId, connection.id, connection.messages + 1);

    if (this.options.rateLimit) {
        this._rateLimit.counter++;
        if (!this._rateLimit.checkpoint) {
            this._rateLimit.checkpoint = Date.now();
        }
    }

    connection.send(element.mail, function (err, info) {
        // only process callback if current handler is not changed
        if (element === connection.queueElement) {
            element.callback(err, info);
            connection.queueElement = false;
        }
    });
};

/**
 * Creates a new pool resource
 */
SMTPPool.prototype._createConnection = function () {
    var connection = new PoolResource(this);

    connection.id = ++this._connectionCounter;

    this.logger.info('Created new pool resource #%s', connection.id);

    // resource comes available
    connection.on('available', function () {
        this.logger.debug('Connection #%s became available', connection.id);

        if (this._closed) {
            // if already closed run close() that will remove this connections from connections list
            this.close();
        } else {
            // check if there's anything else to send
            this._processMessages();
        }
    }.bind(this));

    // resource is terminated with an error
    connection.once('error', function (err) {
        if (err.code !== 'EMAXLIMIT') {
            this.logger.error('Pool Error for #%s: %s', connection.id, err.message);
        } else {
            this.logger.debug('Max messages limit exchausted for #%s', connection.id);
        }

        if (connection.queueElement) {
            connection.queueElement.callback(err);
            connection.queueElement = false;
        }

        // remove the erroneus connection from connections list
        this._removeConnection(connection);

        this._continueProcessing();
    }.bind(this));

    connection.once('close', function () {
        this.logger.info('Connection #%s was closed', connection.id);

        this._removeConnection(connection);

        if (connection.queueElement) {
            // If the connection closed when sending, add the message to the queue again
            // Note that we must wait a bit.. because the callback of the 'error' handler might be called
            // in the next event loop
            setTimeout(function () {
                if (connection.queueElement) {
                    this.logger.debug('Re-queued message <%s> for #%s', connection.queueElement.messageId, connection.id);
                    this._queue.unshift(connection.queueElement);
                    connection.queueElement = false;
                }
                this._continueProcessing();
            }.bind(this), 50);
        } else {
            this._continueProcessing();
        }
    }.bind(this));

    this._connections.push(connection);

    return connection;
};

/**
 * Continue to process message if the pool hasn't closed
 */
SMTPPool.prototype._continueProcessing = function () {
    if (this._closed) {
        this.close();
    } else {
        setTimeout(this._processMessages.bind(this), 100);
    }
};

/**
 * Remove resource from pool
 *
 * @param {Object} connection The PoolResource to remove
 */
SMTPPool.prototype._removeConnection = function (connection) {
    var index = this._connections.indexOf(connection);

    if (index !== -1) {
        this._connections.splice(index, 1);
    }
};

/**
 * Checks if connections have hit current rate limit and if so, queues the availability callback
 *
 * @param {Function} callback Callback function to run once rate limiter has been cleared
 */
SMTPPool.prototype._checkRateLimit = function (callback) {
    if (!this.options.rateLimit) {
        return callback();
    }

    var now = Date.now();

    if (this._rateLimit.counter < this.options.rateLimit) {
        return callback();
    }

    this._rateLimit.waiting.push(callback);

    if (this._rateLimit.checkpoint <= now - 1000) {
        return this._clearRateLimit();
    } else if (!this._rateLimit.timeout) {
        this._rateLimit.timeout = setTimeout(this._clearRateLimit.bind(this), 1000 - (now - this._rateLimit.checkpoint));
        this._rateLimit.checkpoint = now;
    }
};

/**
 * Clears current rate limit limitation and runs paused callback
 */
SMTPPool.prototype._clearRateLimit = function () {
    clearTimeout(this._rateLimit.timeout);
    this._rateLimit.timeout = null;
    this._rateLimit.counter = 0;
    this._rateLimit.checkpoint = false;

    // resume all paused connections
    while (this._rateLimit.waiting.length) {
        var cb = this._rateLimit.waiting.shift();
        setImmediate(cb);
    }
};
