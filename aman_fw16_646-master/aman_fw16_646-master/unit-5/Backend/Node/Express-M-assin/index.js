const express= require("express");
const { token } = require("morgan");
const fs= require("fs");
const morgan= require("morgan");
const { Agent } = require("http");
const app= express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms [:date[clf]] HTTP/:http-version '))

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use((req,res,next)=>{
    const {name,rating,desc,genre,cast}= req.body;
    if(typeof(name)!=="string"||typeof(rating)!=="number"||typeof(desc)!=="string"||typeof(genre)!=="string"||typeof(cast)!=="object"){
        res.status(404).end("Invalid entry please enter  all the keys")
    }else{
        next();
    }
})


app.get("/",(req,res)=>{
  res.send("Server is live")
})


app.get("/movies",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        res.json(JSON.parse(data));
    })
})


app.post("/movies",(req,res)=>{
fs.readFile("./db.json","utf-8",(err,data)=>{
    let adata= JSON.parse(data);
    adata.movies=[...adata.movies,req.body];
    fs.writeFile("./db.json",JSON.stringify(adata),"utf-8",(err)=>{
        res.send("post done")
    })
})
})

app.listen(8080,()=>{
    console.log("server started")
})