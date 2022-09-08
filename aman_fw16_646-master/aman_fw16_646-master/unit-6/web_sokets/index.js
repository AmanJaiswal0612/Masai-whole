const {WebSocketServer} = require("ws")
const express= require("express");

const app= express();
app.use(express.urlencoded({extended:true}));

const wss= new WebSocketServer({port: 9000});


wss.on("listening",()=>{
    console.log("Listening for socket connection")
})

wss.on("connection",(socket)=>{
    console.log("Got new connection");

    socket.send("Hello new user");

    socket.on("message",(msg)=>{
      console.log("Client said:", msg.toString("utf-8"));
      socket.send(Math.random())
    })

})