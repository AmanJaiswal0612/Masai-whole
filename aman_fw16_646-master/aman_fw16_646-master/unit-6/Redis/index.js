

const Redis = require("ioredis");

const client = new Redis({
    // host: "68.183.83.233",
    host:"127.0.0.1",
    port: 6379
})


const redisActivity= async()=>{

   await client.set("name:amie","AmanJaiswal",'ex',10);


   let data= await client.get("name:amie")
   console.log(data)
}
redisActivity()



// client.get("name:amie").then((value)=>{
//     console.log("return",value)
// })

//or


// let data=client.get("name:amie",((err,data)=>{
   
// }))
// console.log(data)

 










//rdcli -h 68.183.83.233   (sir redis server)
