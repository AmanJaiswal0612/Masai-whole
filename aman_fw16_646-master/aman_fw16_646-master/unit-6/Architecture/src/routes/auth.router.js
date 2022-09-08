const {Router} = require("express");
const { createUser } = require("../controller/user.controller");
const UserModel = require("../models/user.model")


const authRouter= Router();


authRouter.post("/signup",(req,res)=>{
    const {name,address,age,isMarried}= req.body;
   const {message,status} = await createUser({name,address,age,isMarried}) 
   
   if(status=="error"){
    return res.send(message)
   }
   // token generation get that user from create
  res.send("signup success")



})

module.exports=authRouter