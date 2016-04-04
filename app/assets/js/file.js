document.getElementById('loadFile').onclick = function(){
  return loadFileAsText();
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


document.getElementById('saveHTML').onclick = function(){
  return saveFileAsHTML();
}

function saveFileAsHTML() {
  var highlightjs = '<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/highlight.min.js" charset="utf-8"></script>';
  var foundationcss = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.0/foundation.css">';
  var stylecss = "<style>body {margin-top: 50px; margin-bottom: 50px;} hr {max-width:100%;} a, a:link, a:hover, a:active, a:visited {color: #4183c4;}</style>"
  var highlightcss = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/'+ highlight_theme +'.min.css">';
  var header = '<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" /><title>'+ document.getElementById('filename').value +'</title>'+ highlightcss + foundationcss + stylecss +'</head><body><div class="row">';
  var footer = highlightjs + '</div></body></html>'
  var textToWrite = html_beautify(header + document.getElementById('output').innerHTML + footer);
  var textFileAsBlob = new Blob([textToWrite], {type:'text/html'});
  var fileNameToSaveAs = document.getElementById('filename').value + '.html';

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

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}
