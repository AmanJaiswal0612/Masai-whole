const {Router}= require("express")
const User= require("../models/user.js")

const authRouter= Router();

authRouter.post("/signup",  (req,res)=>{  
   const user= new User(req.body);
   user.save((err,success)=>{
    if(err){
        return res.status(500).send({message:"Error"})
    }
        return res.status(201).send({message:"login succesful",token:1234,user:success["_doc"]});
   })
})

authRouter.post("/login",async (req,res)=>{
    const{username,password}= req.body;
    const validUser= await User.find({username,password});
    if(validUser.length<1){
        return res.status(401).send("USer not found")
    }
    return res.send(validUser[0])
})

module.exports=authRouter;