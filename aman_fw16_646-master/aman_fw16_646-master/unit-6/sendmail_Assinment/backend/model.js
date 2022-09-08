const {Schema,model}= require("mongoose")

const userSchema= new Schema({
    name:String,
    email:String,
    password:String,
    
})

const User= model("user",userSchema)

const ObjectId= Schema.Types.ObjectId;

const otpSchema= new Schema({
    userid:ObjectId,
    validated:Boolean,
    otp:String,
    totalattemps:Number,
    requestCall:Boolean
})

const Otp= model("otp",otpSchema)


module.exports= {User,Otp}



