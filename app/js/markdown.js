document.getElementById('editor').onkeyup = function(e) {

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
    document.getElementById('editor').value = document.getElementById('editor').value + "****";
  }

  //ctrl I
  if(e.ctrlKey && e.keyCode == 73){
    document.getElementById('editor').value = document.getElementById('editor').value + "**";
  }

  //alt ctrl U
  if(e.altKey && e.ctrlKey && e.keyCode == 85){
    document.getElementById('editor').value = document.getElementById('editor').value + "~~~~";
  }

  //ctrl K
  if(e.ctrlKey && e.keyCode == 75){
    document.getElementById('editor').value = document.getElementById('editor').value + "[title](https://)";
  }

  //alt K
  if(e.altKey && e.keyCode == 75){
    document.getElementById('editor').value = document.getElementById('editor').value + "<pre><code></code><pre>";
  }

  //alt I
  if(e.altKey && e.keyCode == 73){
    document.getElementById('editor').value = document.getElementById('editor').value + "![title](https://)";
  }

  //ctrl L
  if(e.ctrlKey && e.keyCode == 76){
    document.getElementById('editor').value = document.getElementById('editor').value + "* ";
  }

  //ctrl Q
  if(e.ctrlKey && e.keyCode == 81){
    document.getElementById('editor').value = document.getElementById('editor').value + "> ";
  }

  //alt ctrl 1
  if(e.altKey && e.ctrlKey && e.keyCode == 49){
    document.getElementById('editor').value = document.getElementById('editor').value + "# ";
  }

  //alt ctrl 2
  if(e.altKey && e.ctrlKey && e.keyCode == 50){
    document.getElementById('editor').value = document.getElementById('editor').value + "## ";
  }

  //alt ctrl 3
  if(e.altKey && e.ctrlKey && e.keyCode == 51){
    document.getElementById('editor').value = document.getElementById('editor').value + "### ";
  }
}
