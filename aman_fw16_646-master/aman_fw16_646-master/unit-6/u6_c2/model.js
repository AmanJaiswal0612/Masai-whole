const {Schema,model}= require("mongoose");


const userSchema= new Schema({
    username: String,
    hash: String,
    isAdmin:Boolean,
    isStudent:Boolean,
    isTeacher:Boolean
})

const studentSchema= new Schema({
    username: String,
    batch:String,
    role: {type:String,enum:["Students"]}
})

const instructorsSchema= new Schema({
    username:String,
    role: {type:String,enum:["Instructors"]}
    
})

const adminSchema= new Schema({
    username:String,
    role: {type:String,enum:["Admin"]}
})

const User= model("user",userSchema)
const Student= model("student",studentSchema)
const Teacher= model("teacher",instructorsSchema)
const Admin=model("admin",adminSchema)

module.exports={User,Student,Teacher,Admin};