# MDWriter
A markdown web editor for desktop

## Install Dependencies
1. Install npm dependencies
<pre><code>
$ npm install
</code></pre>

2. Install Bower dependencies
<pre><code>
$ bower install
</code></pre>

## Test

### Testing in browser

* For testing in browser you need to change **{app: 'firefox-aurora'}** in gulpfile.js for your browser order.
* run gulp browser in the terminal

### Testing with NW

* Install NW package globally
<pre><code>$ sudo npm install -g nw</code></pre>
* run gulp test in terminal

## Build

* Actually you can build this proyect for GNU/Linux, OSX and Windows only in x64, but if you want to make a build for x86, you can add this in gulpfile.js in this line
<pre><code>platforms: ['linux64', 'osx64', 'win64'],</code></pre>


## ToDo

* Actually jsPDF is unstable, is necessary to find a module that does the same function or create a module from scratch for HTML5 to PDF.
* Some bugs in the word counter must be solved.
* In file name is necessary to clean the name -> /foo/bar.md to bar.md.
* Support for Blogger, Tumblr and Wordpress (maybe Ghost).
* Font size change support.
* Print support?.

## License

Check LICENSE for information.
