const express= require("express");
const connection= require("./db.js")
var cookieParser = require('cookie-parser')
const {Otp,User}= require("./model.js")
const hbs = require("handlebars")
const nodemailer = require('nodemailer');
const jwt= require("jsonwebtoken")


const app= express();
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.get("/",(req,res)=>{
    console.log('Cookies: ', req.cookies)
    res.send(req.cookies)
})


app.post("/signup",async (req,res)=>{
   let user= await User.insertMany(req.body);
   
   const otp= Math.floor(100000+Math.random() * 999999);
   await Otp.insertMany({userid:user[0]._id,otp,totalattemps:1,requestCall:true,validated:false})

   const content=`<div>
   <h1>Heloo {{name}}</h1>
   <p>Thank you for signin</p>
   <p>OTP is {{otp}}</p>
   </div>
   `

   const template= hbs.compile(content)

   const transport = nodemailer.createTransport({
    host:"smtp.ethereal.email",
    secure:false,
    port: 587,
    auth:{
        user:"liliana.jacobs75@ethereal.email",
        pass: "Dgxeeun2BM2thrNqwN"
    }
   })
   

   transport.sendMail({
    from:"amiejaiswal@example.com",
    to: user[0].email,
    subject: "Sign in Otp",
    html : template({name:user[0].name,otp:otp})
   })


   res.cookie("userid",user[0].id)
   res.json("singup done enter the otp")


})


app.post("/signin",async(req,res)=>{
  let user=await User.find(req.body);
  if(!user[0]) return res.send("Invalid user")
  let token= jwt.sign({ name: user[0].name }, "SECRET1234",{expiresIn:"15m"});
  res.cookie("token",token)
  res.send(token)
})

app.post("/otp",async(req,res)=>{
  const {otp}= req.body;
  const {userid}= req.cookies
  let valid=await Otp.find({otp:otp,userid:userid});
  if(valid){
    await Otp.updateOne({userid:userid},{$set:{validated:true}})
    res.send("signup successful")
  }else{
     res.status(403).send("Invalid Otp")
  }
})


app.post("/forgototp",(req,res)=>{
  const otp= Math.floor(100000+Math.random() * 999999);
const email= req.body;
const user= await User.find({email:email})
const content=`<div>
<h1>Heloo {{name}}</h1>
<p>OTP is {{otp}}</p>
</div>
`

const template= hbs.compile(content)

const transport = nodemailer.createTransport({
 host:"smtp.ethereal.email",
 secure:false,
 port: 587,
 auth:{
     user:"liliana.jacobs75@ethereal.email",
     pass: "Dgxeeun2BM2thrNqwN"
 }
})


transport.sendMail({
 from:"amiejaiswal@example.com",
 to: user[0].email,
 subject: "Sign in Otp",
 html : template({name:user[0].name,otp:otp})
})


res.cookie("userid",user[0].id)
res.json("otp sended")

})


app.post("/newpass",async(req,res)=>{
  const {password}= req.body;
  const {userid}= req.cookies;
  await User.updateOne({_id:userid},{$set:{password:password}});
  return res.send("password updated");
})

app.get("/logout",async(req,res)=>{
    res.cookie("token", "")
    res.send("logout successful")
})

app.listen(8080,async ()=>{
    try{
      await connection
    }catch(e){
      console.log(e)
    }
})





