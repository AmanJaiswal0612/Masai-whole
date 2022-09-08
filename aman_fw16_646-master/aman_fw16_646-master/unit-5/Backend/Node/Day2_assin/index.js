const { readdir, createReadStream, readFile } = require("fs");
const http= require("http");


const server= http.createServer((req,res)=>{
    if(req.url=="/"){
       
   readdir("../Day2_assin",(err,file)=>{   
      file.map((el)=>{
          res.write(`<a href=/${el} style='font-size:30px;color:black;margin-left:80px' >${el}</a>`)
      })
    
      res.end();
   }) 
   }else if(req.url=="/public"){
    res.setHeader("content-type","application/json") 
       readdir("./public",(err,file)=>{
           if(err){
               console.log(err)
           }
           res.write(JSON.stringify(file));
           res.end();
       })
   }else if(req.url=="/src"){
       res.setHeader("content-type","application/json")
       readdir("./src",(err,file)=>{
        if(err) console.log(err);
        res.write(JSON.stringify(file));
        res.end();
       })
   }else if(req.url=="/data"){
    res.setHeader("content-type","application/json")
    const readStream = createReadStream("./data/data.json");
    readStream.pipe(res);
  }else if(req.url=="/node_modules"){
    readdir("./node_modules",(err,file)=>{
        if(err) console.log(err);
        res.write(JSON.stringify(file));
        res.end();
       })
  }else if(req.url=="/public/word"){
      readFile("./public/word.json","utf-8",(err,data)=>{
          if(err) console.log(err);
          res.write(data);
          return res.end()
      })
  }else if(req.url==="/package-lock.json"){
    readFile("./package-lock.json","utf-8",(err,data)=>{
        if(err) console.log(err);
        res.write(data);
        return res.end()
    })
  }else if(req.url==="/package.json"){
    readFile("./package.json","utf-8",(err,data)=>{
        if(err) console.log(err);
        res.write(data);
        return res.end()
    })
  }else if(req.url==="/index.js"){
    readFile("./index.js","utf-8",(err,data)=>{
        if(err) console.log(err);
        res.write(data);
        return res.end()
    })
  }
  else{
      res.write("Content not found");
      res.end();
  }


})

server.listen(8080,()=>{
    console.log("server start")
})