const mongoose= require("mongoose")






const connection= mongoose.connect("mongodb://localhost:27017/IMDB");

const BlogSchema= new mongoose.Schema({
    author:String,
    title:String,
    createAt: Date,
    content: String,
    tags: [String]
})

const MovieSchema= new mongoose.Schema({
    movie: {type : String, required:true},
    rating: Number,
    releasedate: Date,
    earning: {type:Number, default:"1000",min:0,max:10000},
    cast : {type:[String]},
    language:{type:String,enum:["English","Hindi"]}
})
const Movie = mongoose.model("movie",MovieSchema);





async function main(){


    const conn= await connection;

    // const m1= new Movie({
    //     movie: 'Thor Love Thunder',
    //     rating: 4.8,
    //     releasedate: new Date(),
    //     earning: 7000,
    //     cast : ["Thor","lavender"],
    //     language:"English"
    // })
    // await m1.save();
    const allMovie= await Movie.find();
    const hindiMovie= await Movie.find({language:"Hindi"}).sort({title:1})
    const movieGreater4= await Movie.find({rating:{$gt:3}})
    console.log(movieGreater4);
    conn.disconnect();
}





//preclas----->
// const Blog= mongoose.model("blog",BlogSchema)
// async function main(){
//   const  conn= await mongoose.connect("mongodb://localhost:27017/website")
//    const b1= new Blog({
//        author:"John doe",
//        title:"Learn React",
//        createAt: new Date(),
//        content:"React is good...",
//        tags:["tech","react"]
//    })
//    await b1.save();
//   conn.disconnect();
// }

main();