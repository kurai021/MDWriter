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
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });

}
