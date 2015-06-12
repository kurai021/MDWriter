document.getElementById('saveHTML').onclick = function(){
  return saveFileAsHTML();
}

function saveFileAsHTML() {
  var header = '<html lang="en"><head><meta charset="UTF-8"><title>'+ document.getElementById('filename').value +'</title></head><body>';
  var footer = '</body></html>'
  var textToWrite = header + document.getElementById('output').innerHTML + footer;
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
