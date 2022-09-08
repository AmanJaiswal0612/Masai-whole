const {Router}= require("express")

const product= Router();

product.get("/",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        res.json(JSON.parse(data));
    })
})


//post products
product.post("/",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed=JSON.parse(data);
        parsed.products=[...parsed.products,req.body];
        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.status(201).send("product created");
        })
    })
})


//delete

product.delete("/:id",(req,res)=>{
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

product.put("/:id",(req,res)=>{
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