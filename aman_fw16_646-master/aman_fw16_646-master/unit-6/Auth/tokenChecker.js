const jwt = require("jsonwebtoken");

const tokenChecker= (req,res,next)=>{
    const token= req.body.token||req.query.token||req.headers["authorization"].split(" ")[1];
    if(token){
        jwt.verify(token,"SECRET1234",(err,decoded)=>{
            if(err){
              return res.status(401).json({"error":true,message:"Unauthorised"})
            }
            req.decoded=decoded
            next();
        })
    }else{
        return res.status(403).json({"error":true,message:"No token"})
    }
}

module.exports=tokenChecker