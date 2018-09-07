# MDWriter
---
A markdown desktop editor with steroids powered by the web.

![Imgur](http://i.imgur.com/s5iuoi6.gif)

## Features
* Save to Markdown (GFM)
* Export to HTML, PDF and DOCX
* Syntax Highlighting
* Editor and highlighting themes and font size changer
* Outlook, Gmail and Yahoo support (for Gmail you must enable [less secure apps](https://myaccount.google.com/lesssecureapps))
* Blogger support (experimental)
* Word counter
* Markdown syntax helper and shortcuts
* Emoji and shortcuts support
* Mermaid for Flowchart/Graphs and Gantt diagram support, [see basic syntax](http://knsv.github.io/mermaid/#graph)
* And a nice UI :D

## Getting Started

### Clone from source
<pre><code>$ git clone https://github.com/kurai021/MDWriter.git
$ cd MDWriter/
</code></pre>

### Install Dependencies
1. Install npm dependencies
<pre><code>$ npm install
</code></pre>

2. Install Bower dependencies
<pre><code>$ bower install
</code></pre>

3. Build Highlight.js
<pre><code>$ gulp build-highlight
</code></pre>

## Test

### Testing in browser

* For testing in browser you need to change **{app: 'firefox-aurora'}** in gulpfile.js for your browser order.
* run gulp browser in the terminal

### Testing with NW

* run gulp test in terminal

## Build
* Actually you can build this proyect for GNU/Linux, OSX and Windows only in x64, but if you want to make a build for x86, you can add this in gulpfile.js in this line
<pre><code>platforms: ['linux64', 'osx64', 'win64'],</code></pre>

## ToDo

* ~~Actually jsPDF is unstable with SVG, is necessary to find a module that does the same function or create a module from scratch for HTML5 to PDF.~~
* ~~Some bugs in the word counter must be solved.~~
* ~~In file name is necessary to clean the name -> /foo/bar.md to bar.~~
* ~~Change font size in live.~~
* ~~Support for Blogger, Tumblr~~ and Wordpress (maybe Ghost).
* ~~Emoji support~~ (partial)
* ~~Flowchart/Graphs and Gantt support~~
* ~~Separate load/save as .md file from markdown.js~~
* ~~Markdown shortcuts fixed~~
* Print support?.
* Optimize the code
* Create a task for minification.

## How to Contribute?

If you want to contribute to this project, create a issue with "request to contribute" as a title and a brief description of what do you want to do, so I will add you as a colaborator.

## License

Check LICENSE for information.

## Donations

If this project was useful for you, you can donate some BTC -> 19bAJaFzHRTYPW5SrbzzfPbZ5jLAEotCVa
