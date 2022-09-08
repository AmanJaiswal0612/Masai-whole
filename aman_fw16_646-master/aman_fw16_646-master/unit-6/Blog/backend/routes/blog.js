const {Router}= require("express")
const {Blog}= require("../db")
const blogRoute = Router();
const {Category,User} =require("../model")
const jwt = require("jsonwebtoken")
const Redis = require("ioredis");
const client = new Redis({
  host: "127.0.0.1",
  port: 6379
})

blogRoute.get("/",async(req,res)=>{
 let data= await Blog.find({Deleted:false});
 return res.json(data);
})

blogRoute.get("/myblog/:id",async(req,res)=>{
    if(req.params.id.length!=24){
        return res.status(403).send("Forbdibben")
    }
    
    

    let data= await Blog.find({Userid:req.params.id,Deleted:false});
    // if(data.length===0){
    //     return res.status(403).send("Forbdibben")
    // }
    
    let user= await User.find({_id:req.params.id});

    let savedtoken= await client.get(`token:${user[0].Email}`);
    try{
        const decoded= jwt.verify(savedtoken,"amanjaiswal0612");
        if(decoded){
            return res.send(data);
        }else{
           
            return res.status(403).send({message:"Token expires"})
        }
    }catch(e){
        return res.status(403).send({message:"Token expires"})
    }
      
 
    if(!req.headers["authorization"]){
        return res.status(403).send("forbiden")
    }
    let token= req.headers["authorization"].split(" ")[1];
    try{
        const decoded= jwt.verify(token,"amanjaiswal0612");
        if(decoded){
            return res.send(data);
        }else{
            return res.status(403).send({message:"Token expires"})
        }
    }catch(e){
        return res.status(403).send({message:"Token expires"})
    }
})

blogRoute.get("/tras/:id",async(req,res)=>{
    
    let data= await Blog.find({Deleted:true,Userid:req.params.id});
    return res.json(data)
})


blogRoute.post("/", async(req,res)=>{
    const {Title,Body,movies,poltics,sports,education,finance,user}= req.body;
    console.log(req.headers["authorization"])
    if(!req.headers["authorization"]){
        return res.status(403).send("forbidden")
    }
    
    let token= req.headers["authorization"].split(" ")[1];
    try{
       let decoded= jwt.verify(token,"amanjaiswal0612");
       if(decoded){
        
        let arr=[];
        if(movies){
            let d=  await Category.find({Name:"movies"})
            arr.push(d[0]._id);
        }
        if(poltics){
            let d= await Category.find({Name:"poltics"})
            console.log(d[0]._id)
            arr.push(d[0]._id);
        
        }
        if(sports){
            let d= await Category.find({Name:"sports"})
            arr.push(d[0]._id);
        }
        if(education){
            let d=await Category.find({Name:"education"})
            arr.push(d[0]._id);
        }
        if(finance){
            let d=await Category.find({Name:"finance"})
            arr.push(d[0]._id);
        }
        console.log(arr)
        const body={Title,Body,Category_ids:arr,Userid:user._id,CreatedAt:new Date(),UpdateAt:"",Deleted:false};
        let result=await Blog.insertMany(body);
        await User.updateOne({...user},{$push:{Blog_id:result[0]._id}})
        return res.status(201).send("post done")
       }else{
        return res.status(403).send("forbidden")
       }
    }catch(e){
        return res.status(403).send({message:"Token expires"})
    }
   
})


blogRoute.get("/:id",async(req,res)=>{
    if(req.params.id.length!=24){
       return res.status(401).send("invalid id")
    }
    const data= await Blog.find({_id:req.params.id});
    
        return res.json(data)
    
})

blogRoute.put("/:id",async (req,res)=>{
    const body={...req.body,UpdateAt:new Date()};
    await Blog.updateOne({_id:req.params.id},{$set:body});
    return res.send("update  done");
})


blogRoute.delete("/:id",async (req,res)=>{
    const body = {Deleted:true};
    await Blog.updateOne({_id:req.params.id},{$set:body});
    return res.status(202).send("delete  done");
})

blogRoute.delete("/:id/delete",async(req,res)=>{
    await Blog.deleteOne({_id:req.params.id});
    return res.send({message:"Delete Doen"})
})

blogRoute.put("/:id/restore",async(req,res)=>{
    const body = {Deleted:false};
    await Blog.updateOne({_id:req.params.id},{$set:body});
    return res.send({message:"restore  done"})
})




module.exports= {blogRoute}