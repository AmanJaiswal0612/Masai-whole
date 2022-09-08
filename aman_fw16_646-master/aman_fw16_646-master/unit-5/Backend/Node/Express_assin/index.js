const { resolveSoa } = require("dns");
const express= require("express");
const fs= require("fs")


const app= express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        res.json(JSON.parse(data))
    })
})

app.post("/",(req,res)=>{
fs.readFile("./db.json","utf-8",(err,data)=>{
let adata= JSON.parse(data);
adata.todos=[...adata.todos,req.body];
fs.writeFile("./db.json",JSON.stringify(adata),"utf-8",()=>{
    res.status(201).send();
})
})
})


app.delete("/:id",(req,res)=>{
    let {id}= req.params;
    fs.readFile("./db.json","utf-8",(err,data)=>{
        let adata= JSON.parse(data);
        if(!adata.todos.find((el)=>el.id==id)){
            res.status(404).send("Invalid id");
        }
        adata.todos=adata.todos.filter((el)=>el.id!=id);
        fs.writeFile("./db.json",JSON.stringify(adata),"utf-8",()=>{
            res.send("delete suceesfull")
        })
    })
})


app.put("/:id",(req,res)=>{
    let {id}= req.params;
    fs.readFile("./db.json","utf-8",(err,data)=>{
        let adata= JSON.parse(data);
        if(!adata.todos.find((el)=>el.id==id)){
              adata.todos=[...adata.todos,req.body];
              fs.writeFile("./db.json",JSON.stringify(adata),"utf-8",()=>{
              res.status(201).send("todo added");
             })
        }else{
        let todos=adata.todos;
        let newtodo= todos.map((el)=>{
            if(el.id==id){
                return req.body;
            }else{
                return el;
            }
        })
        adata.todos=newtodo;
        console.log(adata)
        fs.writeFile("./db.json",JSON.stringify(adata),"utf-8",()=>{
            res.send("edit done");
        })
      }
    })
    
})



app.listen(8080,()=>{
    console.log("server started at http://localhost:8080")
})