document.getElementById('saveDOCX').onclick = function(){
  convertImagesToBase64();
  var source = $("#templateHTML").html();
  var template = handlebars.compile(source);
  var context = {
    title: document.getElementById('filename').value,
    highlightcss: highlight_theme,
    content: document.getElementById('output').innerHTML
  };
  var textToWrite = template(context);

  var converted = htmlDocx.asBlob(textToWrite, {orientation: 'portrait'});

  var downloadDOCX = document.createElement("a");

  downloadDOCX.download = context.title + ".docx";
  downloadDOCX.innerHTML = "Download File";

  downloadDOCX.href = window.URL.createObjectURL(converted);
}


function convertImagesToBase64() {
  var contentDocument = document.getElementById('output');
  var regularImages = contentDocument.querySelectorAll("img");
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  [].forEach.call(regularImages, function(imgElement) {
    // preparing canvas for drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;
    ctx.drawImage(imgElement, 0, 0);
    // by default toDataURL() produces png image, but you can also export to jpeg
    // checkout function's documentation for more details
    var dataURL = canvas.toDataURL();
    imgElement.setAttribute('src', dataURL);
  })
  canvas.remove();
}
