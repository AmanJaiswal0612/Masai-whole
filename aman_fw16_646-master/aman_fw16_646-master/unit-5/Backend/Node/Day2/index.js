const http = require("http");
const {readFile, createReadStream} =require("fs")
const server= http.createServer((req,res)=>{
  
    if(req.url==="/"){
       readFile("./index.html","utf-8",(err,data)=>{
           if(err) console.log(err);
           res.end(data);
       })
    }else if(req.url==="/products"){
        res.setHeader("content-type","application/json")
        return res.end(JSON.stringify([1,2,3,4]));
    }else if(req.url==="/end"){
        return res.end("ever end")
    }else if(req.url==="/web"){
        return res.end("<h1> UI Is Here </h1>")
    }else if(req.url=="/file"){
      readFile("./get.txt","utf-8",(err,data)=>{
          res.end(data);
      })
    }else if(req.url==="/stream"){
      const readStream= createReadStream("./new.txt");
      readStream.pipe(res);
    }
 
})

server.listen(8080,()=>{
    console.log("server started at 8080")
})