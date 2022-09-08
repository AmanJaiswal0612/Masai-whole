const redis = require("ioredis");

const client = new redis({
    host:"127.0.0.1",
    port: 6379
})
let count=0;
async function setTime(req,res,next){
  let server= await client.get(req.ip);
  if(!server){
    await client.set(req.ip,count);
  }else{
    if(count>10){
        res.send("Limit exceeds");
    }else{
        await client.set(req.ip,count++);
    }
  }
  next();
}


module.exports= setTime;