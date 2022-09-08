const express= require("express");
const cors= require("cors");
const multer= require("multer");
const path= require("path")




const app= express();


const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Images')
    },
    filename:(req,file,cb)=>{ 
        cb(null,Date.now()+path.extname(file.originalname))
    }
 }
)

const upload= multer({storage:storage});
app.use(cors());


app.post("/",upload.single("image"),(req,res,next)=>{
  

    res.send("post recived")
    next();
})

app.get("/",(req,res)=>{
    res.send("server is live")
})

app.listen(8080,()=>{
    console.log("server started")
});