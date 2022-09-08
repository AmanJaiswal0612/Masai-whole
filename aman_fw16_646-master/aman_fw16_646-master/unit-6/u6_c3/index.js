const express= require("express");
const http= require("http");
const nodemailer= require("nodemailer");


const {Server}= require("socket.io")
const connection = require("./db")
const Currency = require("./models/currencies.model")

const app= express();
const httpServer= http.createServer(app);


//first insert Data in mongoDb database then do the things 


const io= new Server(httpServer);
io.on("connection", async (ws)=>{
const data= await Currency.find();
// console.log(data)
console.log("got new connection")

ws.emit("initial",data)


let id= setInterval(async ()=>{
    for(let i=0;i<data.length;i++){
        let value=data[i].value + Math.floor(Math.random()*(5-(-5)+1))+(-5);
        await Currency.updateOne({_id:data[i]._id},{value:value})
    }
    let ndata= await Currency.find()
    ws.emit("changed",ndata)
},1000)


})



app.use(express.urlencoded({extended:true}));
app.use(express.json());





app.get("/",(req,res)=>{
    res.sendFile(__dirname+ "/public/index.html")
    
})

app.post("/:id",async (req,res)=>{
    console.log(req.params)
     let data= await Currency.find({_id:req.params.id});
     
    
     setTimeout(async ()=>{
        const count= Number(data[0].count);
        await Currency.updateOne({_id:req.params.id},{$set:{count:count+1}});

        
        const content=`<div>
        <h1>Heloo</h1>
      
        <p>Thank you for purchasing</p>
        </div>
        `
        
        
        
        
        const transport=nodemailer.createTransport({
            host:"smtp.ethereal.email", //eg->.gmail,.zohomail
            secure:false,
            port: 587, //465:ssl->secure,  //587:TLS->unsecure
            auth:{
                user:"elian.lebsack55@ethereal.email",
                pass: "bxBHrvP6ypQscTz1vg"
            }
        })
        
        transport.sendMail({
            from : "aman.jaiswal123@example.com",
            to:"yoyoto@example.com",
            subject:"Hello from nodemailer",
            // text: "Hello world 1234 mingois good"
            html:content
        })


        res.json({"data":"order processed successfully"})
     },5000)
    
})

httpServer.listen(8080,async()=>{
 try{
    await connection;
    console.log("Server connected")
 }catch(e){
    console.log(e)
 }
})


