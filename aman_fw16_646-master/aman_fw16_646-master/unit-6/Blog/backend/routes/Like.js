const {Router}= require("express")
const {Like}=  require("../model.js");

const likeRoute= Router();

likeRoute.get("/:id",async (req,res)=>{
    let data= await Like.find({Blog_id:req.params.id});
    return res.json(data)
})


likeRoute.post("/:id",async (req,res)=>{
    let body= {...req.body,Blog_id:req.params.id};
    await Like.insertMany(body);
    res.send("like done")
})

module.exports=likeRoute