const express= require("express");
const authRouter=require("./routes/auth.js")
const {connection}= require("./db.js")
const User= require("./models/user.js");
const userRouter = require("./routes/profile.js");
const cors= require("cors")
const app= express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/auth",authRouter);
app.use("/profile",userRouter);

app.get("/",(req,res)=>{
    res.send("server")
})




app.listen(8080,async ()=>{
    try{
        await connection;
        console.log("server started")
    }
    catch{
        console.log("err")
    }
    
})