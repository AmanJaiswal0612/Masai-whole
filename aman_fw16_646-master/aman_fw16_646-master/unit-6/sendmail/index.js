
const nodemailer= require("nodemailer");
const hbs =require("handlebars")
const content=`<div>
<h1>Heloo {{name}}</h1>
<p>Thank you for signing</p>
</div>
`

const template= hbs.compile(content);


const transport=nodemailer.createTransport({
    host:"smtp.ethereal.email", //eg->.gmail,.zohomail
    secure:false,
    port: 587, //465:ssl->secure,  //587:TLS->unsecure
    auth:{
        user:"ed.oconner7@ethereal.email",
        pass: "hXTNvdkkcemKycrJuT"
    }
})

transport.sendMail({
    from : "from@example.com",
    to:"to@example.com",
    subject:"Hello from nodemailer",
    // text: "Hello world 1234 mingois good"
    html:template({name:"Aman Jaiswal"})
}).then(console.log)