var gulp = require('gulp');
var shell = require('gulp-shell');
var open = require('gulp-open');

gulp.task('test', shell.task(['node_modules/.bin/nw .']));

gulp.task('browser', function(){
  gulp.src('./app/*.html')
  .pipe(open('file://<%= file.path %>', {app: 'firefox-official'}));
});
