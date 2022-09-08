import { useEffect, useState } from "react";
import Employ from "./Employ.css"

export const EmployForm= ({newdata})=>{
 const [formData,setFormData]= useState({})

 const[done,setDone]=useState(false);

const handleChange= (e)=>{
const formName= e.target.name;
if(e.target.type==="checkbox"){
  setFormData({...formData,[formName]:e.target.checked})
}else{
  setFormData({...formData,[formName]:e.target.value})
}
}
  
  const  handleSubmit=async (e)=>{
   e.preventDefault();

   let res= await fetch(`http://localhost:3000/todo`,{
    method : "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
   }
    )
    newdata(formData)
     for(let i=0;i<6;i++){
      e.target[i].value="";
     }
    
     setDone(true);
  }

  useEffect(()=>{
    setTimeout(() => {
      setDone(false);
    }, 3000);
  },[done])
       return(
         <div id="formbox">
              
            <form onSubmit={handleSubmit} id="eform">
                  <div >
                  <label>Name</label><br/>
                    <input onChange={handleChange} name="username" type="text"/>
                  </div>
                  <div >
                  <label>Age</label><br/>
                    <input onChange={handleChange} name="age" type="number"/>
                  </div>
                  <div >
                  <label>Address</label><br/>
                    <input onChange={handleChange} name="address" type="text"/>
                  </div>
                  <div >
                  <label>Select  Deparmnet</label><br/>
                    <select name="department" onChange={handleChange}>
                      <option>Select Your Department</option>
                      <option>Marketing</option>
                      <option>HR</option>
                      <option>Development</option>
                    </select>
                  </div>
                  <div >
                  <label>Salary</label><br/>
                    <input onChange={handleChange} name="salary" type="number"/>
                  </div>
                  <div >
                    <label>Married</label>
                    <input onChange={handleChange} name="married" type="checkbox"/>
                  </div>
                  <div>
                    <input type="submit"/>
                  </div>
                  <h1>{done?"Form Submited":null}</h1>
            </form>

         </div>
       )
}