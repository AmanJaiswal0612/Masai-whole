const express = require("express");

const User = require("./model/user");
const connection = require("./db/db");
const crypto= require("crypto")
const axios = require("axios").default
const app = express();
var session = require('express-session')
const jwt = require("jsonwebtoken");
app.use(session({secret:"COOKIESSECRET",resave:false,saveUninitialized:true}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//github login
let accessToken=""
const CLIENT_ID= "6baa0c353a10a01cf7bf"
const CLIENT_SECRET= "d8dc81ff03047b02d1f42287ae681d816c73ca45"
app.get("/login",(req,res)=>{
   res.send("<a href='https://github.com/login/oauth/authorize?client_id=6baa0c353a10a01cf7bf'>Login With Github</a>")
})
app.get("user/github/calback", async (req,res)=>{
  const requestToken= req.query.code;

  if(req.query.error){
    return res.send("Error Ocuured"+ req.query.error)
  }
  const response = await axios.post("https://github.com/login/oauth/access_token",{},
  {
    params:{
      client_id: CLIENT_ID,
      client_secret:CLIENT_SECRET,
      code:requestToken
    }
  }
  )
//store in accessToken in db
console.log(response)
accessToken= response.data;
res.send("login success"+accessToken)

})

//<______________________________________________________________________________________>

app.get("/",(req,res)=>{

  // if (req.session.views) {
  //   req.session.views++
  //   res.setHeader('Content-Type', 'text/html')
  //   res.write('<p>views: ' + req.session.views + '</p>')
  //   res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
  //   res.end()
  // } else {
  //   req.session.views = 1
  //   res.end('welcome to the session demo. refresh!')
  // }

return res.cookie("authtoken","123456",{httpOnly:true,secure:false}).send("Cokkies set")


})

app.post("/signup", async (req, res) => {
  const{username,password,name,age}= req.body;

  //generate hash from password and store that in db so one knows his pass word
  //first parameter is password , 2nd secret key,3rd no of iteration,4th no of charcters, 5th algorithum
  const hash= crypto.pbkdf2Sync(password,"SECRET1234",60,64,"sha256").toString("hex");
  await User.insertMany({username,hash,name,age});
  res.send("user cretaed");
});

app.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.find({ username});
  //generate hash again with that password if the hash prsent in db and hash newly formed is samee  then user is valid 
  const hash= crypto.pbkdf2Sync(password,"SECRET1234",60,64,"sha256").toString("hex");
  if(hash!==user[0].hash){
   return res.send("Invalid User");
  }
  
    const token = jwt.sign({ name: user[0].name }, "SECRET1234");
    res.send({ token });
 
});

//Authorization
// Set Authorization : Beare token in header. in frontend set it to axios headers
app.get("/profile/:id", async (req, res) => {
  if (req.params.id.length != 24) {
    return res.status(403).send({ message: "Invaid UserID" });
  }
  const user = await User.findById(req.params.id);
  if (user === null) {
    return res.status(403).send({ message: "Invalid UserID" });
  }
  const token = req.headers["authorization"].split(" ")[1];
  try {
    const decoded = jwt.verify(token, "SECRET1234");
    if (decoded) {
      return res.send(user);
    }
    return res.status(403).send("forbidden");
  } catch (e) {
    return res.status(403).send("forbidden");
  }
});

app.listen(8080, async () => {
  try {
    await connection;
  } catch (e) {
    console.log(e);
  }
});
