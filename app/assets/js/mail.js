var nodemailer = require('nodemailer');

document.getElementById("send-email").onclick = function(){

  var from = document.getElementById("from").value;
  var pass = document.getElementById("password").value;
  var to = document.getElementById("to").value;
  var subject = document.getElementById("filename").value;
  var body = document.getElementById('output').innerHTML;

  var options = {
    from: from,
    to: to,
    subject: subject,
    html: body
  }


  var patt = new RegExp("@gmail.com");

  if(patt.test(from) == true){
    var transporter = nodemailer.createTransport("smtps://" + from + ":" + pass + "@smtp.gmail.com");
  }
  else {
    var transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", // hostname
        port: 587, // port for secure SMTP
        auth: {
            user: from,
            pass: pass
        }
    });
  }

  // send mail with defined transport object
  transporter.sendMail(options, function(error, info){
    if(error){

      var errormsg = '<small class="error">Wrong entry<small>';

      $('#to').addClass("error");
      $(errormsg).insertAfter('#to');

      $('#from').addClass("error");
      $(errormsg).insertAfter('#from');

      $('#password').addClass("error");
      $(errormsg).insertAfter('#password');

      return console.log(error);

    }

    else {
      console.log('Message sent: ' + info.response);

      var modal = document.getElementById("email-alert");
      modal.foundation('reveal','close');
    }

  });

}

function removeError(){
  if ( $( "small.error" ) ) {
    $( "small.error" ).remove();

    $('#to').removeClass("error");
    $('#from').removeClass("error");
    $('#password').removeClass("error");

  }
}

document.getElementById("from").onclick = function(){
  return removeError();
}

document.getElementById("to").onclick = function(){
  return removeError();
}

document.getElementById("password").onclick = function(){
  return removeError();
}
