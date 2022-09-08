const express = require("express");

const User = require("./model/user");
const connection = require("./db/db");
const argon= require("argon2")
const jwt = require("jsonwebtoken");
const cookieparser = require('cookie-parser');
const tokenChecker = require("./tokenChecker");

const app= express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieparser())
app.get("/",(req,res)=>{
    res.cookie("authtoken","123456")
    res.end("welcome")
})

app.get("/ccheck",(req,res)=>{
  console.log(req.cookies);
  res.send("aaman")
})

app.post("/signup", async (req, res) => {
   const {name,age,username,password,role}= req.body;
   console.log(req.body)
    const hash=  await argon.hash(password,{salt:Buffer.from("1234565467")})
    await User.insertMany({name,age,username,hash,role});
    res.json("signup success");
  });
  
  app.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.find({ username});

    const verification = await argon.verify(user[0].hash,password);
    if(verification){
        const token = jwt.sign({ name: user[0].name }, "SECRET1234");
        return res.send({ token });
    }
     return res.send("Invalid User");
  });

  app.use(tokenChecker);

  app.get("/profile/:id",async(req,res)=>{
    let profile= await User.find({_id:req.params.id})
    return res.json(profile)  
  })








app.listen(8080, async () => {
    try {
      await connection;
    } catch (e) {
      console.log(e);
    }
  });
  