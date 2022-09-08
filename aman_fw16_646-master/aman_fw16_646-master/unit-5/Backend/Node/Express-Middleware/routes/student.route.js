const {Router}= require("express");

const student = Router();

student.get("/get",(req,res)=>{
   res.end("studnet server")
})


module.exports=student