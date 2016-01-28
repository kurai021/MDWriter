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
  },
  email: {
    url: 'http://mail.google.com/mail/?view=cm&fs=1',
    to: '&to=',
    subject: '&su=',
    body: '&body='
  }
}

var name = document.getElementById('filename');
var content = document.getElementById('output');

document.getElementById("tumblr").onclick = function(){
  var tumblrEmbed = document.getElementById("tumblr-embed");

  tumblrEmbed.setAttribute("href", services.tumblr.url + services.tumblr.title + name.value + services.tumblr.body + content.innerHTML);

}

document.getElementById("blogger").onclick = function(){
  var bloggerEmbed = document.getElementById("blogger-embed");

  bloggerEmbed.setAttribute("href", services.blogger.url + services.blogger.title + name.value + services.blogger.body + content.innerHTML);

}
