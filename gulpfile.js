var gulp = require('gulp');
var shell = require('gulp-shell');
var open = require('gulp-open');

var nw_builder = require('nw-builder');

gulp.task('test', shell.task(['node_modules/.bin/nw .']));

gulp.task('build-highlight', shell.task([
	'cd app/node_modules/highlight.js/ && npm install',
	'cd app/node_modules/highlight.js/ && node tools/build.js :common'
]));

gulp.task('build', function(){
  var nw = new nw_builder({
    files: ['./package.json', './LICENSE', './README.md', './app/**'],
    platforms: ['linux64', 'osx64', 'win64'],
    version: '0.33.0',
		flavor: 'normal',
		buildType: 'versioned'
  })

  nw.on('log', console.log);

  nw.build().then(function(){
    console.log("all done!");

  }).catch(function(error){
    console.error(error);
  });
});
