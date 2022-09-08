const express= require("express");
const {Movie,connection}= require("./db.js")
const app= express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req,res)=>{
    return res.send("server statred")
})




app.get("/movies:sort", async(req,res)=>{
    let {sort}= req.params;
    let movie= await Movie.find().sort({[sort]:1});
    return res.json(movie)
    })

app.get("/movies",async (req,res)=>{
   let query= req.query;
   
   if(query.movie){
    let movies= await Movie.find({movie:{$regex:query.movie,$options:/i/}})
     return res.json(movies);
   }
   if(query.rating){
       let movies= await Movie.find({rating:query.rating})
       return res.json(movies)
   }
   if(query.perPage){
       var skip;
       console.log(query)
      if(query.pageNo==1){
        skip=0
      }else {
        skip=skip+3;
      }  
    let movie=await Movie.find().limit(query.perPage).skip(skip);
    return res.json(movie);
   }
   
   let allMovie= await Movie.find()
   return res.json(allMovie)
})







//update
app.put("/movies/:movie",async (req,res)=>{
    let movie=req.params.movie;
    let updated=req.body;
    await Movie.updateOne({movie:movie},{$set:updated});
    res.send("movie  is updated");
})



//post 
app.post("/movies",async (req,res)=>{
  await Movie.insertMany({...req.body});
  return res.send("movie is added")
})

//delete
app.delete("/movies/:movie",async(req,res)=>{
   
    await Movie.deleteOne({movie:req.params.movie})
    res.send("Movie is deleted")
})

app.listen(8080, async ()=>{
    try{
        await connection;
    }
    catch{
        console.log("failed to connect db")
    }
    
})