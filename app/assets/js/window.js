var win = require('nw.gui').Window.get();

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
