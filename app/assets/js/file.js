var handlebars = require("../app/node_modules/handlebars");

document.getElementById('filetoload').onchange = function(){
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

  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);

  downloadLink.click();

}


document.getElementById('saveHTML').onclick = function(){
  return saveFileAsHTML();
}

function saveFileAsHTML() {
  var source = $("#templateHTML").html();
  var template = handlebars.compile(source);
  var context = {
    title: document.getElementById('filename').value,
    highlightcss: highlight_theme,
    content: document.getElementById('output').innerHTML
  };
  var textToWrite = template(context);
  var textFileAsBlob = new Blob([textToWrite], {type:'text/html'});
  var fileNameToSaveAs = document.getElementById('filename').value + '.html';

  var downloadHTML = document.createElement("a");
  downloadHTML.download = fileNameToSaveAs;
  downloadHTML.innerHTML = "Download File";

  downloadHTML.href = window.URL.createObjectURL(textFileAsBlob);

  downloadHTML.click();

}

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}
