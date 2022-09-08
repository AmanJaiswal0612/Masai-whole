const mongooose = require("mongoose");

const connection = mongooose.connect("mongodb://localhost:27017/Blog_App");


const ObjectId= mongooose.Schema.Types.ObjectId;
const blogSchema = new mongooose.Schema({
Title:String,
Body:String,
CreatedAt:String,
UpdateAt:String,
Deleted:Boolean,
Category_ids:[ObjectId],
Userid:ObjectId
})

const Blog= mongooose.model("blog",blogSchema);

module.exports= {Blog,connection}