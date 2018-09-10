var name = document.getElementById('filename').value;
var content = document.getElementById('output');

var bloggerUrl = document.getElementById("bloggerUrl").value;

var services = {
  blogger: {
    endpoint: 'https://www.googleapis.com/blogger/v3/blogs/',
    oauth: '891869804234-c77gaa25td962qaiasafu0g3ild5bvkb.apps.googleusercontent.com:4AAoGdscx0u9cfTR9cMkFJL5',
    blog_url: bloggerUrl,
    data: {
      title: name,
      content: content
    }
  }
}

document.getElementById("blogger-send").onclick = function(){
  $.ajaxSetup({
    beforeSend: function(request) {
        request.setRequestHeader("User-Agent",services.blogger.oauth);
    }
  });
  $.ajax({
    url: services.blogger.endpoint + services.blogger.blog_url + '/posts/',
    type: "POST",
    datatype: "application/json; charset=utf-8",
    data: {
      title: services.blogger.data.title,
      content: services.blogger.data.content
    }
  }).done(function(msg){
    console.log("Data saved: " + msg);
  });
}
