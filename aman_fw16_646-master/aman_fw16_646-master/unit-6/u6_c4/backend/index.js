const express = require('express');
const mongoose = require('mongoose');
const connection = mongoose.connect("mongodb://localhost:27017/c4-app")
const Shortrouter = require("./routes/url")



const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());


//redirect route
app.use('/', require('./routes/redirects'))

//shortrouter route
app.use('/', Shortrouter)


app.get("/",(req,res)=>{
    res.send("server start")
})


const PORT =process.env.PORT||8080


app.listen(PORT, async ()=>{
    try{
        await connection
    }
    catch(e){
      console.log(e);
    }
})