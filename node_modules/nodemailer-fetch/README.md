# nodemailer-fetch

Fetches HTTP URL contents for [nodemailer](https://github.com/nodemailer/nodemailer).

[![Build Status](https://secure.travis-ci.org/nodemailer/nodemailer-fetch.svg)](http://travis-ci.org/nodemailer/nodemailer-fetch)
<a href="http://badge.fury.io/js/nodemailer-fetch"><img src="https://badge.fury.io/js/nodemailer-fetch.svg" alt="NPM version" height="18"></a>

## Usage

```javascript
var fetch = require('nodemailer-fetch');
fetch('http://www.google.com/').pipe(process.stdout);
```

The method takes a single argument, the destination URL. Only GET is supported.

The defaults are the following:

  * Basic auth is supported
  * Up to 5 redirects are followed (Basic auth gets lost after first redirect)
  * gzip is handled if present
  * Cookies are supported
  * No shared HTTP Agent
  * Invalid SSL certs are allowed

## License
**MIT**
