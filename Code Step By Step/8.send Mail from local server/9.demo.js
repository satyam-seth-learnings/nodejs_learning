var nodeMailer=require('nodemailer');
var transport=nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'astered.info@gmail.com',
        pass:'password'
    }
});
var mailOptions={
    from:'astered.info@gmail.com',
    to:'satyam1998.1998@gmail.com',
    subject:'test node mail',
    text:'hello i am satyam seth'
}
transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.warn(error);
    }
    else{
        console.warn("email has been sent",info.response);
    }
})