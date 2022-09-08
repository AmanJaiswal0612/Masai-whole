const express= require("express");
const limitChecker  = require("./limitChecker")
const setTime= require("./limit")

const app= express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(setTime)
app.get("/",(req,res)=>{

 let ip= req.ip;
 res.send(ip);

})

app.listen(8080,()=>{
    console.log("server started")
})