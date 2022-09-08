import { useState } from "react"




const Form=({addData})=>{
 let initialState={
     imgURL:"",
     title:"",
     dish:"",
     rating:"",
     vote:"",
     cost:"",
     card:"",
     cash:""
 }


 const[formData,setFormData]= useState(initialState);
  const handleChange=(e)=>{
    const {name,value,type}=e.target
    console.log(name)
    if(type==="checkbox"){
      setFormData({...formData,[name]:e.target.checked})
    }else{
      setFormData({...formData,[name]:value })
    }
  }



const handleClick= async(event)=>{
  event.preventDefault();
  let res= await fetch("http://localhost:3000/res",{
    method:"POST",
    headers:{"Content-type":"application/json"},
    body: JSON.stringify(formData)
  });
  let data= await res.json();
  console.log(data)
  
  addData(formData)
}
 return(
     <form onSubmit={handleClick}>
         <input name="imgURL" type="text"  placeholder="IMAGE URL" onChange={handleChange}/><br />
         <input  name="title" type="text"   placeholder="NAME" onChange={handleChange}/><br />
         <input name="dish" type="text"  placeholder="DISH" onChange={handleChange}/><br />
         <input name="rating" type="text"  placeholder="RATING" onChange={handleChange}/><br />
         <input name="vote" type="text"  placeholder="VOTING" onChange={handleChange}/><br />
         <input name="cost" type="text"  placeholder="COST" onChange={handleChange}/><br />
         <label>Payment:&nbsp;&nbsp;</label>
         <label>Card </label>
         <input name="card" type="checkbox"  placeholder="CARD" onChange={handleChange}/>
         <label>Cash </label>
         <input name="cash" type="checkbox"  placeholder="CASH" onChange={handleChange}/><br />
         <input type="submit"/>
     </form>
 )
}

export default Form;