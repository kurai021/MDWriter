# MDWriter
A markdown desktop editor with steroids powered by the web.

![](http://i.imgur.com/849DVZs.gif)

## Features
* Save to Markdown
* Export to HTML and PDF
* Syntax Highlighting
* Editor and highlighting themes and font size changer
* Outlook, Gmail and Yahoo support
* Blogger support (experimental)
* Word counter
* Markdown syntax helper and shortcuts
* And a nice UI :D

## Installation
------
### Clone from source
<pre><code>$ git clone git@github.com:kurai021/MDWriter.git
$ cd MDWriter/
</code></pre>

### Install Dependencies
1. Install npm dependencies
<pre><code>$ npm install
</code></pre>

2. Install Bower dependencies
<pre><code>$ bower install
</code></pre>

3. Build Highlight.js Bower package (**/app/assets/components/highlight.js**) as seen in the [documentation](http://highlightjs.readthedocs.org/en/latest/building-testing.html)
<pre><code>node tools/build.js :common</code></pre>

## Test
--------
### Testing in browser

* For testing in browser you need to change **{app: 'firefox-aurora'}** in gulpfile.js for your browser order.
* run gulp browser in the terminal

### Testing with NW

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

If this project was useful for you, you can donate some BTC -> 19bAJaFzHRTYPW5SrbzzfPbZ5jLAEotCVa