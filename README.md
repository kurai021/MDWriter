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
* ~~Some bugs in the word counter must be solved.~~
* ~~In file name is necessary to clean the name -> /foo/bar.md to bar.~~
* ~~Change font size in live.~~
* Support for Blogger, Tumblr and Wordpress (maybe Ghost).
* Print support?.
* Optimize the code
* Create a task for minification.
* Delete all bower dependencies and use only node package?

## License

Check LICENSE for information.

## Donations

If this project was useful for you, you can donate some BTC :D

[![Donate Button](https://github.com/kurai021/MDWriter/blob/master/app/assets/bitcoin.svg)](bitcoin:19bAJaFzHRTYPW5SrbzzfPbZ5jLAEotCVa?amount=0.024&label=support MDWriter&message=Hi, thanks for create MDWriter!)
