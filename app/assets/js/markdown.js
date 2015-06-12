var myTextarea = document.getElementById("editor");

var codemirror = CodeMirror.fromTextArea(myTextarea, {
  lineNumbers: true,
  mode: "markdown",
  theme: "mdn-like",
  extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"},
  autoCloseBrackets: true
});

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
    highlight: function (code) {
      return highlightAuto(code).value;
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
  var fileToLoad = document.getElementById("filetoload").files[0];

  var fileReader = new FileReader();

  fileReader.onload = function(fileLoadedEvent){
    var textFromFileLoaded = fileLoadedEvent.target.result;

    codemirror.getDoc().setValue(textFromFileLoaded);
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
