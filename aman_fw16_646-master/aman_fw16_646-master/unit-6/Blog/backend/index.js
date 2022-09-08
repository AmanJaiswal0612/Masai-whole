const express = require("express");
const {Blog,connection} = require("./db.js")
const {blogRoute} = require("./routes/blog.js")
const cors= require("cors");
const commentRoute = require("./routes/Comment.js");
const likeRoute = require("./routes/Like.js");
const categoryRoute = require("./routes/Category.js");
const SignRoute = require("./routes/Sign.js");

const app= express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use("/blog",blogRoute);
app.use("/comment",commentRoute)
app.use("/like",likeRoute)
app.use("/category",categoryRoute)
app.use("/user",SignRoute)
app.get("/",(req,res)=>{
  res.send("server started");
})


const PORT = process.env.PORT|| 8080

app.listen(PORT,async()=>{
 try{
   await connection;
   console.log("server is started")
 }catch(e){
    console.log(e)
 }
})

