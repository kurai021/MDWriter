var gulp = require('gulp');
var open = require('../');

gulp.task('simple', function(){
  gulp.src('./index.html')
  .pipe(open());
});

gulp.task('stream', function(){
  gulp.src('./index.html', {buffer: false})
  .pipe(open());
});

gulp.task('template', function(){
  gulp.src('./second.html')
  .pipe(open('<%file.path%>'));
});

gulp.task('open', function(){
  var options = {
    app: 'google-chrome'
  };
  gulp.src('./*.html')
  .pipe(open('file://<%= file.path %>', options));
});


gulp.task('url', function(){
  var options = {
    url: 'http://localhost:3000',
    app: 'firefox'
  };
  gulp.src('./index.html') // An actual file must be specified or gulp will overlook the task.
  .pipe(open('', options));
});


gulp.task('default', ['simple', 'template', 'open', 'url', 'stream']);
