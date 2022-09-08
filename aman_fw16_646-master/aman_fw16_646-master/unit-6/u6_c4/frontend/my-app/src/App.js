
import './App.css';
import {useState} from "react"
import axios from "axios"
function App() {
const [uform,setuform]= useState({})


 
 const [shortUrl,setshortUrl]= useState("")


 const handleChange= (e)=>{
  const {name,value}= e.target;
  setuform({...uform,[name]:value})
 }

const handleSubmit= (e)=>{
e.preventDefault();
axios.post('http://localhost:8080/shorten/',uform)
     .then(({data})=>{
       setshortUrl(data.shortUrl)
     })
}

  return (
    <div className="App">
       <form onSubmit={handleSubmit} >

       <input type="url" name="longUrl" placeholder="URL"  onChange={handleChange} required />
        <input type="text" name="customUrl" placeholder='Make Custom URl' onChange={handleChange}/>
        <button  >Short the url</button>
       </form>
        <h3 style={{color:"green"}} > {shortUrl?"Short URl-  ":""} { shortUrl}</h3>
  
    </div>
  );
}

export default App;
