var nodemailer = require('nodemailer');
var pw = require('./secrets')
var transporter = nodemailer.createTransport(`smtps://${pw.gmailUser}:${pw.gmailPw}@smtp.gmail.com`)

transporter.verify(function(error, success) {
   if (error) {
        console.log(error);
   } else {
        console.log('Server is ready to take our messages');
   }
});



// setup e-mail data with unicode symbols
var mailOptions = {
    from: '<tinytravelbooks@gmail.com>', // sender address
    to: '<travelplanning7599@gmail.com>', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
