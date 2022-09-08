const {Schema,model}= require("mongoose")



const UserScheam= new Schema({
    name:String,
    age:Number,
    address:String,
    isMarried:Boolean
})


const UserModel= model("user",UserScheam) 

module.exports= UserModel