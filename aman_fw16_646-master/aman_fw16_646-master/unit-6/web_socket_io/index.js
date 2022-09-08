
const express= require("express");
const http= require("http")
const {Server} = require("socket.io")

const history=[];

const app= express();
const httpServer= http.createServer(app);
//http and ws server connected by this line:-->
const io = new Server(httpServer)
io.on("connection", (ws)=>{
  console.log("Got new Connection")



   ws.emit("history",history);


  //all of the connection get the alert of adding one member except the new one;
  ws.broadcast.emit("newUser")

  ws.on("newMessage",(msg)=>{
    console.log("message received", msg)
    history.push(msg);
    io.emit("newMessage", msg)
  })
})


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req,res)=>{
  res.sendFile(__dirname+ "/public/index.html")
})



httpServer.listen(8080,()=>{
  console.log("server on")
})


