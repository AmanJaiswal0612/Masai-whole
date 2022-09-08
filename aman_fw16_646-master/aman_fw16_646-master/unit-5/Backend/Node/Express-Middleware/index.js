const { query } = require("express");
const helmet= require("helmet")
const express= require("express");
const studentRoute= require("./routes/student.route");
const teacherRoute= require("./routes/teacher.route");
const compression = require("compression");
const cors= require("cors")


const app= express();




app.use(compression());
app.use(helmet());
app.use(cors());

app.use((req,res,next)=>{
    console.log("The queery is" ,req.query);
    if(!req.query.apiKey){
        res.status(401).send("apikey doesn't exist")
    }
    console.time("beforenext")
    next();
    console.timeEnd("beforenext")
})

// app.use((req,res,next)=>{
//     console.log(req.headers["apikey"])
//     if(!req.headers["apikey"]){
//         return res.status(401).send("Inalid  user need apikey")
//     }
//     next();
// })


app.use((req,res,next)=>{
    const t1= performance.now();
    next();
    const t2= performance.now();
    console.log("time is ",t2-t1);
})


app.use("/teacher",teacherRoute);
app.use("/student",studentRoute);

app.get("/",(req,res)=>{
    res.send("Server StartedServer")
})


app.listen(8080,()=>{
    console.log("server started")
});