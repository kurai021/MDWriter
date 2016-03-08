var gui = require('nw.gui');
var win = gui.Window.get();

var maximized = true;

win.maximize();

document.getElementById("btn-max").onclick = function(){

  if(!maximized){
    win.maximize();
    maximized = true;
  }
  else{
    win.unmaximize();
    maximized = false;
  }
}

document.getElementById("btn-min").onclick = function(){
  win.minimize();
}

document.getElementById("btn-close").onclick = function(){
  win.close();
}

function supportExternalLinks(event) {

  var href;
  var isExternal = false;

  function crawlDom(element) {
    if (element.nodeName.toLowerCase() === 'a') {
      href = element.getAttribute('href');
    }
    if (element.classList.contains('js-external-link')) {
      isExternal = true;
    }

    if (href && isExternal) {
      gui.Shell.openExternal(href);
      event.preventDefault();
    } else if (element.parentElement) {
      crawlDom(element.parentElement);
    }
  }

  crawlDom(event.target);
}

document.body.addEventListener('click', supportExternalLinks, false);
