var gulp = require('gulp');
var shell = require('gulp-shell');
var open = require('gulp-open');

var nw_builder = require('nw-builder');

gulp.task('test', shell.task(['node_modules/.bin/nw .']));

gulp.task('browser', function(){
  gulp.src('./app/*.html')
  .pipe(open('file://<%= file.path %>', {app: 'firefox-aurora'}));
});

gulp.task('build', function(){
  var nw = new nw_builder({
    files: ['./package.json', './bower.json', './.bowercc', './LICENSE', './README.md', './app/**', './node_modules/**'],
    platforms: ['linux64', 'osx64', 'win64'],
    version: '0.12.3'
  })

  nw.on('log', console.log);

  nw.build().then(function(){
    console.log("all done!");

  }).catch(function(error){
    console.error(error);
  });
});
