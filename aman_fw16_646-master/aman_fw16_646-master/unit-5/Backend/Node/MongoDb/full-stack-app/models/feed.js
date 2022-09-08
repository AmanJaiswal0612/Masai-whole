const {Schema,model} = require("mongoose")


const feedSchema= new Schema({
    title:String,
    // image: String,
    desc:String,
    tags:[String],
    userId:String
})

const Feed= model("Feed",feedSchema)

module.exports=Feed