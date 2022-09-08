const {Schema,model}= require("mongoose")

const UserSchema= new Schema({
    name:String,
    age:Number,
    username:String,
    hash:String
})

const User= model("user",UserSchema);

module.exports= User