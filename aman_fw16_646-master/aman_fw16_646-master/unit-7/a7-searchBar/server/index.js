const express= require("express");
var cities = require('./db/country-by-capital-city.json')

const app= express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send(cities[0]);
})

app.get("/country/:search",(req,res)=>{
  let {search}= req.params;
  search= search.toLowerCase();
  let country=[];
  for(let i=0;i<cities.length;i++){
    if(cities[i].country.toLowerCase().includes(search)){
        country.push(cities[i].country.toLowerCase());
    }
    
  }

  res.send(country);
})

app.listen(8080,()=>{
    console.log("server started")
})