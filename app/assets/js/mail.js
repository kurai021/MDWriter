var nodemailer = require('../app/node_modules/nodemailer');

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


  var gmail_patt = /@gmail.com/g;
  var outlook_patt = /@outlook.com|@hotmail.com/g;
  var yahoo_patt = /@yahoo.com|@yahoo.es/g;

  if(gmail_patt.test(from) == true){
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: from,
        pass: pass
      }
    });
  }

  else if (outlook_patt.test(from) == true) {
    var transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", // hostname
        port: 587, // port for secure SMTP
        auth: {
            user: from,
            pass: pass
        }
    });
  }

  else if (yahoo_patt.test(from) == true) {
    var transporter = nodemailer.createTransport({
      host:"smtp.mail.yahoo.com",
      port: 587,
      auth: {
        user: from,
        pass: pass
      }
    })
  }

  else {
    //$("#email-alert input").css('border-bottom', '1px solid #F44336');
    $("#email-alert input").css('box-shadow', '0 2px 0 0 #F44336');
    var errormsg = '<small class="error">Email not supported<small>';

    $('#from').addClass("error");
    $(errormsg).insertAfter('#from');

    return console.log(error);
  }

  // send mail with defined transport object
  transporter.sendMail(options, function(error, info){
    if(error){
      //$("#email-alert input").css('border-bottom', '1px solid #F44336');
      $("#email-alert input").css('box-shadow', '0 2px 0 0 #F44336');
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

      $("#email-alert").foundation('reveal','close');

      var options = {
        body: "Email sent!"
      };

      var sentN = new Notification('MDWriter',options);
      setTimeout(function() {sentN.close();}, 5000);

      // your code goes here...
      console.log('Message sent: ' + info.response);

    }

  });

}

function removeError(){
  if ( $( "small.error" ) ) {
    $( "small.error" ).remove();

    $('#to').removeClass("error");
    $('#from').removeClass("error");
    $('#password').removeClass("error");

    $("#email-alert input").css('box-shadow', 'none');

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
