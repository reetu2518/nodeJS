NODE_TLS_REJECT_UNAUTHORIZED='0'
var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host : "smtp.gmail.com",
    port : 587,
    secure : false,
    requireTLS : true,
    auth : {
        user : "reetugupta2518@gmail.com",
        pass: "8577950753"
    },
    tls:{
        rejectUnauthorized:false
    },
});
var mailOptions = {
    from : "reetugupta2518@gmail.com",
    to : "neetugupta.jkctc@gmail.com",
    subject : "test node mail",
    text : "hii mail sent by node"
}
transport.sendMail(mailOptions,function(error,info){
    if(error) {
        console.log(error);
    } else {
        console.log("mail has been sent", info.response);
    }
})