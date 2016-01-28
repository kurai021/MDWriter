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
    filename.value = file.value.replace('.md','');
    document.getElementById('toLoad-alert').style.visibility = "hidden";
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
