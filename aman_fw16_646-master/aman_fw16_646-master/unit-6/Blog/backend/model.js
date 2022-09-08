const mongooose= require("mongoose");


const categorySchema = new mongooose.Schema({
 Name:String
})

const Category= mongooose.model("category",categorySchema);

const ObjectId= mongooose.Schema.Types.ObjectId;
const commentCollection = new mongooose.Schema({
  Message:String,
  Rating:Number,
  Blog_id:ObjectId,
  Parent_id:ObjectId || null,
  Userid:ObjectId
})

const Comment= mongooose.model("comment",commentCollection);

const likeSchema= new  mongooose.Schema({
    Emoji:String,
    Blog_id:ObjectId,
    Userid:ObjectId
})

const Like= mongooose.model("like",likeSchema);


const userSchema= new mongooose.Schema({
    Name:{type:String},
    Email:{type:String},
    hash:{type:String},
    Profile:{linkedin:String,facebook:String,twitter:String,github:String,instagram:String},
    Addresses:[
        {line1:String,city:String,state:String,pincode:Number}
    ],
    Blog_id:[ObjectId]
})

const User= mongooose.model("user",userSchema);


module.exports={Category,Comment,Like,User}