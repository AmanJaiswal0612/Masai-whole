const { appendFile, writeFile, unlink, rename, readFile, mkdir, readdir }= require("fs");

const arguments= process.argv;


if(arguments[2]=="create"){
    if(arguments[3]&&arguments[4]){
      writeFile(arguments[3],arguments[4],"utf-8",(err)=>{
          if(err) throw err;
          console.log("your file is created with given texts")
      })
    }
}

if(arguments[2]=="read"){
    if(arguments[3]){
        readFile(arguments[3],"utf-8",(err,data)=>{
            if(err) throw err;
            console.log(data);
        })
    }
}

if(arguments[2]=="append"){
    if(arguments[3]&&arguments[4]){
        appendFile(arguments[4],arguments[3],(err)=>{
          if(err) throw err;
          console.log("Append done");
        })
    }
}

if(arguments[2]=="delete"){
    if(arguments[3]){
        unlink(arguments[3],(err)=>{
            if(err) throw err;
            console.log("Delete Done")
        })
    }
}


if(arguments[2]=="rename"){
    if(arguments[3]){
       rename(arguments[3],arguments[4],(err)=>{
           if(err) throw err;
           console.log("Rename done");
       })
    }
}



if(arguments[2]=="list"){
    if(arguments[3]){
        readdir(arguments[3],(err,files)=>{
            if(err) throw err;
            files.map((el)=>{
                console.log(el);
            })
        })
    }
}


