const {Router}= require("express")
const {Category,Comment,Like}=  require("../model.js");

const commentRoute= Router();

commentRoute.get("/:id",async (req,res)=>{
   let data= await Comment.find({$and:[{Blog_id:req.params.id},{Parent_id:null}]})
   return res.json(data);
})

commentRoute.post("/:id",async (req,res)=>{
    let body={...req.body,Blog_id:req.params.id,Parent_id:null};
    await Comment.insertMany(body);
    return res.send("comment done")
})



commentRoute.get("/reply/:cid",async (req,res)=>{
    let data= await Comment.find({Parent_id:req.params.cid});
    return res.json(data)
})

commentRoute.post("/reply/:bid/:cid",async(req,res)=>{
    let body={...req.body,Blog_id:req.params.bid,Parent_id:req.params.cid};
    let d=await Comment.insertMany(body);
    return res.json(d)
})

module.exports= commentRoute