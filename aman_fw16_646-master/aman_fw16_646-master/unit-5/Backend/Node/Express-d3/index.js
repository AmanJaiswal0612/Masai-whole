const express=require("express");
const fs =require("fs")
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
  res.send("Welcome to server")
})




//get products


app.get("/products",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        res.json(JSON.parse(data));
    })
})


//post products
app.post("/products",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed=JSON.parse(data);
        parsed.products=[...parsed.products,req.body];
        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.status(201).send("product created");
        })
    })
})


//delete

app.delete("/product/:id",(req,res)=>{
    const {id}= req.params;
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed=JSON.parse(data);
        if(!parsed.products.find((el)=>el.id==id)){
            return res.status(404).send("Can not find id")
        }
        parsed.products=parsed.products.filter((el)=>el.id!=id);
        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.end("product deleted");
        })
    })

})



//update product

app.put("/products/:id",(req,res)=>{
    const {id}= req.params;
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed=JSON.parse(data);
        let products=parsed.products;
        let nproduct= products.map((el)=>{
            if(el.id==id){
                return req.body;
            }else{
                return el;
            }
        })
        parsed.products=nproduct
        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.end("data edited")
        })
    })
})


app.all("*",(req,res)=>{
    res.status(404).send("Not Found")
})
app.listen(8080,()=>{
    console.log("server started at http://localhost:8080")
})






















// app.get("/array",(req,res)=>{
//     res.send([1,2,3,4])
// })

// app.get("/web",(req,res)=>{
//     res.send(`<h1>Hi is Ui </h1>`)
// })



// app.get("/ab+cd",(req,res)=>{
//     res.send("You can write any no of time b")
// })

// app.get("/x*y",(req,res)=>{
//     res.send("you can write any thing b/w x and y")
// })

//dynamic routing

// app.get("/product/:id",(req,res)=>{
    
//     if(req.params.id=='2'){
//     res.send([{mobile:"samsung",color:"blue"}]);
//     }else if(req.params.id=='1'){
//         res.send([{mobile:"iphone",color:"white"}]);
//     }else{
//         res.send("content not found")
//     }
// })

// app.get("/book/:id/page/:no",(req,res)=>{
//     console.log(req.params)
//     res.send(`Book is ${ req.params.id} page no is ${req.params.no}`)
// })

// app.post("/",(req,res)=>{
//     res.send("from index.js")
// })