var open = require('open');
var through = require('through2');
var gutil = require('gulp-util');

module.exports = function(src, opt) {

  return through.obj(function(file, enc, cb){
    if (file.isNull()) return cb(null, file); // pass along
    if (file.isStream()) src = file.path;
    if (!opt) opt = {};
    var cmd = gutil.template(src, {file:file});

    if (!opt.app && !opt.url) {
      open(file.path);
      return cb(null, file);
    }
    if(opt.url){
      open(opt.url, opt.app);
      return cb(null, file);
    }
    // Run normally
    open(cmd, opt.app);
    cb(null, file);
  });
};
