var gulpopen = require('../');
var should = require('should');
require('mocha');

describe('gulp-open', function() {

  it('should open a stream of files with the default application', function(done) {
    gulpopen("<%= file.path%>", done());
  });
  it('should open a stream of files with a defined application', function(done) {
    gulpopen("<%= file.path%>","google-chrome", done());
  });
  it('should open a website in a browser', function(done) {
    gulpopen({url:"http://localhost:3000"}, done());
  });
  it('should open a remote or local file in the default application', function(done) {
    gulpopen({file:"/var/www/index.html"}, done());
  });
});
