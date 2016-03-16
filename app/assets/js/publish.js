var services = {
  tumblr: {
    url: 'https://tumblr.com/share/text?',
    title: 'title=',
    body: '&body='
  },
  blogger: {
    url: 'https://www.blogger.com/blog_this.pyra?',
    title: 'n=',
    body: '&t='
  }
}

var name = document.getElementById('filename').value;
var content = document.getElementById('output');

document.getElementById("tumblr").onclick = function(){
  var tumblrEmbed = document.getElementById("tumblr-embed");

  tumblrEmbed.setAttribute("href", services.tumblr.url + services.tumblr.title + name + services.tumblr.body + content.innerHTML);
}

document.getElementById("blogger").onclick = function(){
  var bloggerEmbed = document.getElementById("blogger-embed");

  bloggerEmbed.setAttribute("href", services.blogger.url + services.blogger.title + name + services.blogger.body + content.innerHTML);
}
