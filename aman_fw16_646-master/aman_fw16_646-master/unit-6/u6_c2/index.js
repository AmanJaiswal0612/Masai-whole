const express= require("express");
const connection= require("./db.js")
const crypto= require("crypto")
const jwt = require("jsonwebtoken")
const {User,Student,Teacher,Admin}= require("./model.js");
const tokenChecker = require("./tokenChecker.js");

const app= express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req,res)=>{
  res.send("server started")
})


//ADMINLOGIN
app.post("/adminsignup",async(req,res)=>{
  const {username,password}= req.body;
  const hash= crypto.pbkdf2Sync(password,"SECRET1234",60,64,"sha256").toString("hex");
  await User.insertMany({username,hash,isAdmin:true,isStudent:false,isTeacher:false})
  res.send("admin signup")
})


//signup

app.post("/signup",async(req,res)=>{
  const {username,password}= req.body;
  const hash= crypto.pbkdf2Sync(password,"SECRET1234",60,64,"sha256").toString("hex");
  await User.insertMany({username,hash,isAdmin:false,isStudent:false,isTeacher:false})
  res.send("user signup")
})


//login

app.post("/login",async(req,res)=>{
 const {username,password}= req.body;
 let user=await User.find({username})
 if(user.length==0){
  return  res.send("invalid user")
 }
 const hash= crypto.pbkdf2Sync(password,"SECRET1234",60,64,"sha256").toString("hex");
 if(user[0].hash!==hash){
  return res.send("invalid user")
 }
 const token= jwt.sign({ username: user[0].username }, "amanjaiswal0612",{expiresIn:"15m"});
 return res.send({ token });
})






//student post
app.use(tokenChecker)


app.post("/studentpost/:id",async (req,res)=>{
  const userID= req.headers["userid"];
  if(!userID){
    return res.send("give user id")
  }
  const admin=await User.find({_id:userID})
  if(admin[0].isAdmin){
  const {batch}= req.body;
  const user= await User.find({_id:req.params.id});
  await User.updateOne({_id:req.params.id},{$set:{isStudent:true}})
  const username= user[0].username;
  await Student.insertMany({username,batch,role:"Students"});
  return res.send("usercreated")
  }else{
    res.send("access denied")
  }
})


//teacher post

app.post("/instructorpost/:id",async (req,res)=>{
  const userID= req.headers["userid"];
  if(!userID){
    return res.send("give user id")
  }
  const admin=await User.find({_id:userID})
  if(admin[0].isAdmin){
  const user= await User.find({_id:req.params.id})
  await User.updateOne({_id:req.params.id},{$set:{isTeacher:true}})
  const username= user[0].username;
  await Teacher.insertMany({username,role:"Instructors"});
  return res.send("teacher created")
  }else{
    res.send("access denied")
  }
})



// student get

app.get("/studentget",async(req,res)=>{
  const userID= req.headers["userid"];
  console.log(userID);
  
  if(!userID){
    return res.send("give user id")
  }
  let user= await User.find({_id:userID});
  if(user[0].isTeacher||user[0].isAdmin){
    const students= await Student.find();
    return res.send(students)
  }else{
    return res.send("access denined")
  }

})


//teacher get

app.get("/instructorget",async(req,res)=>{
  const userID= req.headers["userid"];
  if(!userID){
    return res.send("give user id")
  }
  const admin=await User.find({_id:userID})
  if(admin[0].isAdmin){
  const teachers= await Teacher.find();
  return res.send(teachers)
  }else{
    return res.send("access denied")
  }
})


//student by id
app.get("/studentget/:id",async(req,res)=>{
  const userID= req.headers["userid"];
  if(!userID){
    return res.send("give user id")
  }
  let user= await User.find({_id:userID});
  if(user[0].isTeacher||user[0].isAdmin){
  const student= await Student.find({_id:req.params.id})
  return res.json(student)
  }else{
    return res.send("access denied")
  }
})


//instructor by id
app.get("/instructorget/:id",async(req,res)=>{
  const userID= req.headers["userid"];
  if(!userID){
    return res.send("give user id")
  }
  const admin=await User.find({_id:userID})
  if(admin[0].isAdmin){
  const teacher= await Teacher.find({_id:req.params.id});
  return res.json(teacher)
  }else{
    return res.send("access denied")
  }
})


//move from one batch to another

app.put("/studentget/:id",async(req,res)=>{
  const userID= req.headers["userid"];
  if(!userID){
    return res.send("give user id")
  }
  const admin=await User.find({_id:userID})
  if(admin[0].isAdmin){
  const batch= req.body.batch;
  await Student.updateOne({_id:req.params.id},{$set:{batch:batch}});
  return res.send("batch updated")
  }else{
    res.send("access denied")
  }
})

app.delete("/studentget/:id",async (req,res)=>{
  const userID= req.headers["userid"];
  if(!userID){
    return res.send("give user id")
  }
  const admin=await User.find({_id:userID})
  if(admin[0].isAdmin){
  await Student.deleteOne({_id:req.params.id});
  res.send("student deleted")
  }else{
    res.send("access denied")
  }
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
