var name = document.getElementById('filename').value;
var content = document.getElementById('output');

var bloggerUrl = document.getElementById("bloggerUrl").value;

var services = {
  blogger: {
    endpoint: 'https://www.googleapis.com/blogger/v3/blogs/',
    apikey: 'AIzaSyAOpLRfEMwE8WYZX_NpHdx3W24Oqz9mkEI',
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
        request.setRequestHeader("User-Agent",services.blogger.apikey);
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
