const {Schema,model}= require("mongoose")


const userSchema= new Schema({
    name:{type:String,min:3},
    username:String,
    email:String,
    password:String,
    mobile:Number,
    country:String,
    gender:{
        type:String,
        enum :["Male","Female","Others"]
    }
})

const User=model("user",userSchema);

module.exports=User