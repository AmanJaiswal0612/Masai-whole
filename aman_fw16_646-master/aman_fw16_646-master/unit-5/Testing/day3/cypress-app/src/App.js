import axios from "axios"
import './App.css';
import {useEffect, useState} from "react"
import Input from "./Input";
function App() {
  
  const[count,setCount]=useState(0)
  const[number,setNumber]=useState(0)
  useEffect(()=>{
     gdata()
  },[])

  const gdata=()=>{
   axios.get("http://localhost:8080/count")
   .then(({data})=>setNumber(data.value))
  }
  return (
    <div className="App">
        <button className="counterBtn" type='button' onClick={()=>{
          setCount(count+1)
        }}>Count:{count}</button>


        <button className='cb' onClick={()=>{
          axios.post("http://localhost:8080/count",{
            value:number+1
          }).then(()=>setNumber(number+1))
        }}>The Number is {number}</button>

      <Input/>

    </div>
  );
}

export default App;



