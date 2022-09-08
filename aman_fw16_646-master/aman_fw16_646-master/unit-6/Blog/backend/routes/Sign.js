const {Router} = require('express');
const jwt = require("jsonwebtoken");
const { User } = require('../model');
const SignRoute= Router();
const crypto = require("crypto")
const axios= require("axios").default
const Redis = require("ioredis");
const client = new Redis({
  host: "127.0.0.1",
  port: 6379
})



//<-------------------------------------gitlogin---------------------------->
const CLIENT_ID= "6baa0c353a10a01cf7bf"
const CLIENT_SECRET= "d8dc81ff03047b02d1f42287ae681d816c73ca45"

SignRoute.get("/gitlogin",(req,res)=>{
    res.contentType('.html')
    res.send("<a href='https://github.com/login/oauth/authorize?client_id=6baa0c353a10a01cf7bf'> Login With Github</a>")
})

SignRoute.get("/github/calback", async (req,res)=>{
    const requestToken= req.query.code;
    if(req.query.error){
      return res.send("Error Ocuured"+ req.query.error)
    }
    const response = await axios.post("https://github.com/login/oauth/access_token",{},
    {
      params:{
        client_id: CLIENT_ID,
        client_secret:CLIENT_SECRET,
        code:requestToken
      }
    }
    )
 
  console.log(response.data)
  let accessToken= response.data;
  res.json({message:"login success",token:accessToken})
  
  })

//<--------------------------------------------------------------------------->




SignRoute.post("/signup",async(req,res)=>{
 const{Name,Email,Password,line1,city,state,pincode,linkedin,facebook,twitter,instagram,github}=req.body;
 const hash=crypto.pbkdf2Sync(Password,"amanjaiswal0612",60,64,"sha256").toString("hex");



 const body={
    Name,Email,hash,Profile:{linkedin,facebook,twitter,instagram,github},Addresses:[{line1,city,state,pincode}],Blog_id:[]
 }   
 await User.insertMany(body);
 res.status(201).send({message:"User Creted"})
})

SignRoute.post("/signin",async(req,res)=>{
const {Email,Password}= req.body;
let user=await User.find({Email});
const hash=crypto.pbkdf2Sync(Password,"amanjaiswal0612",60,64,"sha256").toString("hex");
if(hash!==user[0].hash){
  return  res.status(403).send({message:"User Not Found"})
}
 const token= jwt.sign({name:user[0].Name},"amanjaiswal0612",{expiresIn:"1h"})
 await client.set(`token:${user[0].Email}`,token,'ex',36000);
 res.send({message:"signin successful",token:token,user})

})




module.exports= SignRoute
