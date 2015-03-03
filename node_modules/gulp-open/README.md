#gulp-open
[![Build Status](https://travis-ci.org/stevelacy/gulp-open.png?branch=master)](https://travis-ci.org/stevelacy/gulp-open)
[![NPM version](https://badge.fury.io/js/gulp-open.png)](http://badge.fury.io/js/gulp-open)

## Information

<table>
<tr>
<td>Package</td><td>gulp-open</td>
</tr>
<tr>
<td>Description</td>
<td>Open files and URLs with gulp</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
<tr>
<td>Gulp Version</td>
<td>3.x</td>
</tr>
</table>

## Usage
#### Install
    npm install gulp-open --save

## Example

```javascript
var gulp = require('gulp');
var open = require('gulp-open');



// Default usage:
// Open one file with default application

gulp.task('default', function(){
  gulp.src('./index.html')
  .pipe(open('<%file.path%>'));
});


// Open all .html files in a folder with a defined application

gulp.task('open', function(){
  gulp.src('./htdocs/*.html')
  .pipe(open('<%file.path%>', {app: 'google-chrome'}));
});


// Simple usage, no options.
// This will use the default applications

gulp.task('simple', function(){
  gulp.src('./index.html')
  .pipe(open());
});


// Open an URL:

gulp.task('url', function(){
  var options = {
    url: 'http://localhost:3000',
    app: 'firefox'
  };
  gulp.src('./index.html')
  .pipe(open('', options));
});
// A file must be specified as the src when running options.url or gulp will overlook the task.




// Run the task with gulp

gulp.task('default', ['open']);
```
####You can view more examples in the [example folder.](https://github.com/stevelacy/gulp-open/tree/master/examples)


##Options
`Object, {app, url}`

`.pipe(open(Template, options))`

###Template (Required to use options)
`String, file.path`

```javascript

<%file.path%>

// Example:
.pipe(open('<%file.path%>'));

.pipe(open('file:// <%= file.path%>', {app: 'google-chrome'}));

```


###Options.app
`String, local application`

NOTE: If the ``options.app`` is not defined, the Default application will be used for the filetype/URL.

```javascript

'google-chrome' // Linux
'chrome' // Windows
'google chrome' // OSX
'firefox'

// Example:

.pipe(open('file://<%file.path%>', {app: 'google-chrome'}));

```
###Options.url
`String, web url`

####Note for windows users:
URLs may not have a default application. If the task is running without opening in a browser try setting the options.app.
Google Chrome: "chrome"
Firefox: "firefox"

```javascript

'http://localhost:3000'

// Example:
gulp.src('./stubFile.html')
.pipe(open('', {app: 'google-chrome', url: 'http://localhost:3000'}));
// An actual file must be specified as the src when running options.url or gulp-open es.map will overlook the task.
```




## LICENSE

(MIT License)

Copyright (c) 2015 Steve Lacy slacy.me - Fractal <contact@wearefractal.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
