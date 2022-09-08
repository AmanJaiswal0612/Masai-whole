const express= require("express")
const mongoose= require("mongoose")
const authRouter= require("./routes/auth.router")
const config= require("config")


const url=config.get("db.url")
const conn= mongoose.connect(url)


const app= express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/auth",authRouter)
app.get("/",(req,res)=>{
    res.send("welcome")
})


app.listen("8080",()=>{
    console.log("DOne Connection")
})