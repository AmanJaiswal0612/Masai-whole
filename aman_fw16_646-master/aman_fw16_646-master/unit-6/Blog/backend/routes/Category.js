const {Router, query}= require("express")
const {Category}= require("../model")
const categoryRoute= Router();

categoryRoute.get("/",async(req,res)=>{
  if(req.query.q.length!=24){
    let data= await Category.find({Name:"Not Mentioned"})
    return res.json(data)
  }
  let data= await Category.find({_id:req.query.q})
    return res.json(data)
})



module.exports=categoryRoute