var myTextarea = document.getElementById("editor");

var codemirror = CodeMirror.fromTextArea(myTextarea, {
  lineNumbers: true,
  lineWrapping: true,
  mode: "markdown",
  theme: "mdn-like",
  extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"},
  autoCloseBrackets: true,
  viewportMargin: 40
});

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

document.getElementById('filename').value = 'new-document-' + mm + '-' + dd + '-' + yyyy;

//editor theme changer
document.getElementById('accept-change-theme').onclick = function(){
  var theme = document.getElementById('chthemes').selectedOptions[0].text;
  var size = document.getElementById('chsize').selectedOptions[0].text;

  if(theme == '3024-day'){
    codemirror.setOption("theme", "3024-day");
  }
  else if(theme == '3024-night'){
    codemirror.setOption("theme", "3024-night");
  }
  else if(theme == 'ambiance'){
    codemirror.setOption("theme", "ambiance");
  }
  else if(theme == 'base16-dark'){
    codemirror.setOption("theme", "base16-dark");
  }
  else if(theme == 'base16-light'){
    codemirror.setOption("theme", "base16-light");
  }
  else if(theme == 'blackboard'){
    codemirror.setOption("theme", "blackboard");
  }
  else if(theme == 'cobalt'){
    codemirror.setOption("theme", "cobalt");
  }
  else if(theme == 'colorforth'){
    codemirror.setOption("theme", "colorforth");
  }
  else if(theme == 'eclipse'){
    codemirror.setOption("theme", "ecplise");
  }
  else if(theme == 'elegant'){
    codemirror.setOption("theme", "elegant");
  }
  else if(theme == 'erlang-dark'){
    codemirror.setOption("theme", "erlang-dark");
  }
  else if(theme == 'lesser-dark'){
    codemirror.setOption("theme", "lesser-dark");
  }
  else if(theme == 'liquibyte'){
    codemirror.setOption("theme", "liquibyte");
  }
  else if(theme == 'mbo'){
    codemirror.setOption("theme", "mbo");
  }
  else if(theme == 'midnight'){
    codemirror.setOption("theme", "midnight");
  }
  else if(theme == 'monokai'){
    codemirror.setOption("theme", "monokai");
  }
  else if(theme == 'neat'){
    codemirror.setOption("theme", "neat");
  }
  else if(theme == 'neo'){
    codemirror.setOption("theme", "neo");
  }
  else if(theme == 'night'){
    codemirror.setOption("theme", "night");
  }
  else if(theme == 'paraiso-dark'){
    codemirror.setOption("theme", "paraiso-dark");
  }
  else if(theme == 'paraiso-light'){
    codemirror.setOption("theme", "paraiso-light");
  }
  else if(theme == 'pastel-on-dark'){
    codemirror.setOption("theme", "pastel-on-dark");
  }
  else if(theme == 'rubyblue'){
    codemirror.setOption("theme", "rubyblue");
  }
  else if(theme == 'solarized'){
    codemirror.setOption("theme", "solarized");
  }
  else if(theme == 'the-matrix'){
    codemirror.setOption("theme", "the-matrix");
  }
  else if(theme == 'tomorrow-night-bright'){
    codemirror.setOption("theme", "tomorrow-night-bright");
  }
  else if(theme == 'tomorrow-night-eighties'){
    codemirror.setOption("theme", "tomorrow-night-eighties");
  }
  else if(theme == 'ttcn'){
    codemirror.setOption("theme", "ttcn");
  }
  else if(theme == 'twilight'){
    codemirror.setOption("theme", "twilight");
  }
  else if(theme == 'vibrant-ink'){
    codemirror.setOption("theme", "vibrant-ink");
  }
  else if(theme == 'xq-dark'){
    codemirror.setOption("theme", "xq-dark");
  }
  else if(theme == 'xq-light'){
    codemirror.setOption("theme", "xq-light");
  }
  else if(theme == 'zenburn'){
    codemirror.setOption("theme", "zenburn");
  }
  else{
    codemirror.setOption("theme", "mdn-like");
  }

  if (size == '9'){
    $(".CodeMirror pre").css('font-size',"9pt");
  }

  else if (size == '10'){
    $(".CodeMirror pre").css('font-size',"10pt");
  }

  else if (size == '11'){
    $(".CodeMirror pre").css('font-size',"11pt");
  }

  else if (size == '12'){
    $(".CodeMirror pre").css('font-size',"12pt");
  }

  else if (size == '13'){
    $(".CodeMirror pre").css('font-size',"13pt");
  }

  else if (size == '14'){
    $(".CodeMirror pre").css('font-size',"14pt");
  }

  else if (size == '15'){
    $(".CodeMirror pre").css('font-size',"15pt");
  }

  else if (size == '16'){
    $(".CodeMirror pre").css('font-size',"16pt");
  }

  else if (size == '17'){
    $(".CodeMirror pre").css('font-size',"17pt");
  }

  else if (size == '18'){
    $(".CodeMirror pre").css('font-size',"18pt");
  }

  else if (size == '19'){
    $(".CodeMirror pre").css('font-size',"19pt");
  }

  else if (size == '20'){
    $(".CodeMirror pre").css('font-size',"20pt");
  }

  else if (size == '22'){
    $(".CodeMirror pre").css('font-size',"22pt");
  }

  else if (size == '24'){
    $(".CodeMirror pre").css('font-size',"24pt");
  }

  else if (size == '26'){
    $(".CodeMirror pre").css('font-size',"26pt");
  }

  else if (size == '28'){
    $(".CodeMirror pre").css('font-size',"28pt");
  }

  else if (size == '32'){
    $(".CodeMirror pre").css('font-size',"32pt");
  }

  else if (size == '36'){
    $(".CodeMirror pre").css('font-size',"36pt");
  }

  else if (size == '40'){
    $(".CodeMirror pre").css('font-size',"40pt");
  }

  else if (size == '44'){
    $(".CodeMirror pre").css('font-size',"44pt");
  }

  else if (size == '48'){
    $(".CodeMirror pre").css('font-size',"48pt");
  }

  else if (size == '54'){
    $(".CodeMirror pre").css('font-size',"54pt");
  }

  else if (size == '60'){
    $(".CodeMirror pre").css('font-size',"60pt");
  }

  else if (size == '66'){
    $(".CodeMirror pre").css('font-size',"66pt");
  }

  else if (size == '72'){
    $(".CodeMirror pre").css('font-size',"72pt");
  }

  else {
    $(".CodeMirror pre").css('font-size',"8pt");
  }

}

//highlight theme changer
document.getElementById("accept-change-highlight-theme").onclick = function(){
  var highlight_theme = document.getElementById('chhighlightthemes').selectedOptions[0].text;

  function swapStyleSheet(sheet) {
    document.getElementById("highlight_theme").setAttribute("href", sheet);
  }

  if(highlight_theme == 'agate'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/agate.css");
  }

  else if(highlight_theme == 'androidstudio'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/androidstudio.css");
  }

  else if(highlight_theme == 'arduino-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/arduino-light.css");
  }

  else if(highlight_theme == 'arta'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/arta.css");
  }

  else if(highlight_theme == 'ascetic'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/ascetic.css");
  }

  else if(highlight_theme == 'atelier-cave-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-cave-dark.css");
  }

  else if(highlight_theme == 'atelier-cave-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-cave-light.css");
  }

  else if(highlight_theme == 'atelier-dune-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-dune-dark.css");
  }

  else if(highlight_theme == 'atelier-dune-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-dune-light.css");
  }

  else if(highlight_theme == 'atelier-estuary-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-estuary-dark.css");
  }

  else if(highlight_theme == 'atelier-estuary-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-estuary-light.css");
  }

  else if(highlight_theme == 'atelier-forest-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-forest-dark.css");
  }

  else if(highlight_theme == 'atelier-forest-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-forest-light.css");
  }

  else if(highlight_theme == 'atelier-heath-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-heath-dark.css");
  }

  else if(highlight_theme == 'atelier-heath-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-heath-light.css");
  }

  else if(highlight_theme == 'atelier-lakeside-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-lakeside-dark.css");
  }

  else if(highlight_theme == 'atelier-lakeside-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-lakeside-light.css");
  }

  else if(highlight_theme == 'atelier-plateau-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-plateau-dark.css");
  }

  else if(highlight_theme == 'atelier-plateau-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-plateau-light.css");
  }

  else if(highlight_theme == 'atelier-savanna-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-savanna-dark.css");
  }

  else if(highlight_theme == 'atelier-savanna-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-savanna-light.css");
  }

  else if(highlight_theme == 'atelier-seaside-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-seaside-dark.css");
  }

  else if(highlight_theme == 'atelier-seaside-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-seaside-light.css");
  }

  else if(highlight_theme == 'atelier-sulphurpool-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-sulphurpool-dark.css");
  }

  else if(highlight_theme == 'atelier-sulphurpool-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-sulphurpool-light.css");
  }

  else if(highlight_theme == 'brown-paper'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/brown-paper.css");
  }

  else if(highlight_theme == 'codepen-embed'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/codepen-embed.css");
  }

  else if(highlight_theme == 'color-brewer'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/color-brewer.css");
  }

  else if(highlight_theme == 'dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/dark.css");
  }

  else if(highlight_theme == 'darkula'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/darkula.css");
  }

  else if(highlight_theme == 'default'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/default.css");
  }

  else if(highlight_theme == 'docco'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/docco.css");
  }

  else if(highlight_theme == 'far'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/far.css");
  }

  else if(highlight_theme == 'foundation'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/foundation.css");
  }

  else if(highlight_theme == 'github'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/github.css");
  }

  else if(highlight_theme == 'github-gist'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/github-gist.css");
  }

  else if(highlight_theme == 'googlecode'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/googlecode.css");
  }

  else if(highlight_theme == 'grayscale'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/grayscale.css");
  }

  else if(highlight_theme == 'hopscotch'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/hopscotch.css");
  }

  else if(highlight_theme == 'hybrid'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/hybrid.css");
  }

  else if(highlight_theme == 'idea'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/idea.css");
  }

  else if(highlight_theme == 'ir-black'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/ir-black.css");
  }

  else if(highlight_theme == 'kimbie.dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/kimbie.dark.css");
  }

  else if(highlight_theme == 'kimbie.light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/kimbie.light.css");
  }

  else if(highlight_theme == 'magula'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/magula.css");
  }

  else if(highlight_theme == 'mono-blue'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/mono-blue.css");
  }

  else if(highlight_theme == 'monokai'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/monokai.css");
  }

  else if(highlight_theme == 'monokai-sublime'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/monokai-sublime.css");
  }

  else if(highlight_theme == 'obsidian'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/obsidian.css");
  }

  else if(highlight_theme == 'paraiso-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/paraiso-dark.css");
  }

  else if(highlight_theme == 'pojoaque'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/pojoaque.css");
  }

  else if(highlight_theme == 'railscasts'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/railscasts.css");
  }

  else if(highlight_theme == 'rainbow'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/rainbow.css");
  }

  else if(highlight_theme == 'school-book'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/school-book.css");
  }

  else if(highlight_theme == 'solarized-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/solarized-dark.css");
  }

  else if(highlight_theme == 'solarized-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/solarized-light.css");
  }

  else if(highlight_theme == 'sunburst'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/sunburst.css");
  }

  else if(highlight_theme == 'tomorrow'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/tomorrow.css");
  }

  else if(highlight_theme == 'tomorrow-night'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/tomorrow-night.css");
  }

  else if(highlight_theme == 'tomorrow-night-blue'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/tomorrow-night-blue.css");
  }

  else if(highlight_theme == 'tomorrow-night-bright'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/tomorrow-night-bright.css");
  }

  else if(highlight_theme == 'tomorrow-night-eighties'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/tomorrow-night-eighties.css");
  }

  else if(highlight_theme == 'vs'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/vs.css");
  }

  else if(highlight_theme == 'xcode'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/xcode.css");
  }

  else{
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/zenburn.css");
  }

}



document.body.onkeyup = function(e) {
  document.getElementById('editor').value = codemirror.getValue();

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code, lang) {
      var res;
      if(!lang){
        return code;
      }

      switch(lang){
        case 'js':
          lang = 'javascript';
        break;
      }

      try {
        res = hljs.highlightAuto(code).value;
      } catch(e){

      } finally {
        return res || code;
      }
    }
  });

  document.getElementById('output').innerHTML = marked(document.getElementById('editor').value);

  $('pre code').each(function(i, e) {hljs.highlightBlock(e)});

  //ctrl B
  if(e.ctrlKey && e.keyCode == 66){
    codemirror.getDoc().setValue(codemirror.getValue() + "****");
  }

  //ctrl I
  if(e.ctrlKey && e.keyCode == 73){
    codemirror.getDoc().setValue(codemirror.getValue() + "**");
  }

  //alt ctrl U
  if(e.altKey && e.ctrlKey && e.keyCode == 85){
    codemirror.getDoc().setValue(codemirror.getValue() + "~~~~");
  }

  //ctrl K
  if(e.ctrlKey && e.keyCode == 75){
    codemirror.getDoc().setValue(codemirror.getValue() + "[title](https://)");
  }

  //alt K
  if(e.altKey && e.keyCode == 75){
    codemirror.getDoc().setValue(codemirror.getValue() + "<pre><code></code><pre>");
  }

  //alt I
  if(e.altKey && e.keyCode == 73){
    codemirror.getDoc().setValue(codemirror.getValue() + "![title](https://)");
  }

  //ctrl L
  if(e.ctrlKey && e.keyCode == 76){
    codemirror.getDoc().setValue(codemirror.getValue() + "* ");
  }

  //ctrl Q
  if(e.ctrlKey && e.keyCode == 81){
    codemirror.getDoc().setValue(codemirror.getValue() + "> ");
  }

  //alt ctrl 1
  if(e.altKey && e.ctrlKey && e.keyCode == 49){
    codemirror.getDoc().setValue(codemirror.getValue() + "# ");
  }

  //alt ctrl 2
  if(e.altKey && e.ctrlKey && e.keyCode == 50){
    codemirror.getDoc().setValue(codemirror.getValue() + "## ");
  }

  //alt ctrl 3
  if(e.altKey && e.ctrlKey && e.keyCode == 51){
    codemirror.getDoc().setValue(codemirror.getValue() + "### ");
  }
}

function loadFileAsText() {
  var file = document.getElementById("filetoload");
  var fileToLoad = document.getElementById("filetoload").files[0];
  var filename = document.getElementById('filename');
  var fileReader = new FileReader();

  fileReader.onload = function(fileLoadedEvent){
    var textFromFileLoaded = fileLoadedEvent.target.result;

    codemirror.getDoc().setValue(textFromFileLoaded);
    filename.value = file.value.split('/').pop().replace('.md','');
    document.getElementById('toLoad-alert').style.visibility = "hidden";

    document.getElementById('editor').value = codemirror.getValue();
    document.getElementById('output').innerHTML = marked(document.getElementById('editor').value);

    return word_counter();
  };
  fileReader.readAsText(fileToLoad, "UTF-8");

}

document.getElementById('saveMd').onclick = function(){
  return saveFileAsText();
}

function saveFileAsText() {

  var textToWrite = codemirror.getValue();
  var textFileAsBlob = new Blob([textToWrite], {type:'text/x-markdown'});
  var fileNameToSaveAs = document.getElementById('filename').value + '.md';

  var downloadLink = document.createElement("a");

  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";

  if (window.webkitURL != null) {

    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  }

  else {

    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();

}
