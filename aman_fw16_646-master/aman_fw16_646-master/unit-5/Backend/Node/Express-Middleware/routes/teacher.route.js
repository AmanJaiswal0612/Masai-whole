const {Router}= require("express");

const teacher=Router();

teacher.get("/get",(req,res)=>{
    res.send("This is teacher's server")
})

module.exports=teacher;