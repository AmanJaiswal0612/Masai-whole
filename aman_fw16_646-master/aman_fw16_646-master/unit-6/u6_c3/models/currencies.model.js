const {Schema,model}= require("mongoose")


const currencySchema= new Schema({
    name:String,
    value:Number,
    count:Number
})

const Currency= model("currency",currencySchema);

module.exports=Currency