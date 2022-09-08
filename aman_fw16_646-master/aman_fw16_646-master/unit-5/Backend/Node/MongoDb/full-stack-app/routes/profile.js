const User= require("../models/user.js");
const {Router}= require("express");
const Feed = require("../models/feed.js");


const userRouter= Router();

userRouter.get("/:userId",async(req,res)=>{
const {userId}= req.params;
const user=await User.findById(userId);
if(user){
    res.send(user)
}
else{
    res.status.send({message:"User not found"})
}
})

userRouter.get("/:userId/feed",async (req,res)=>{
const{userId}= req.params;
const feeds= await Feed.find({userId});
return res.json(feeds);
})

userRouter.post("/:userId/feed",async (req,res)=>{
    const {userId}=req.params;
    
    const{title,desc,tags}=req.body;

    
    const feed= new Feed({
        title,
        desc,
        tags:tags.split(", "),
        userId,
    })
    await feed.save()
    return res.send("success")
})

module.exports=userRouter;