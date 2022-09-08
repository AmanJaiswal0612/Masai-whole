import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'
import { LaptopData } from './Laptop'


type formProps={
    getData: ()=>void
}
const Form = ({getData}:formProps) => {
const [fData,setFdata]= useState<LaptopData>({})
const handleChange= (e:ChangeEvent<HTMLInputElement>):void=>{
let name:string=e.target.name
let value=e.target.value
if(name==='price'||name==='swidth'||name=='sheight'){
let value2=Number(value);
setFdata({...fData,[name]:value2})
}else{
 setFdata({...fData,[e.target.name]:e.target.value})
}
}
const handleSubmit=  (e:ChangeEvent<HTMLFormElement>):void=>{
e.preventDefault();
console.log(fData)
axios.post("http://localhost:8080/laptops",fData)
.then(()=>getData())
}
  return (
    <div>
       <form onSubmit={handleSubmit} >
          <input type="text" name="model" placeholder='Model Name' onChange={handleChange}  /><br />
          <input type="month" name="year" placeholder='Build Year' onChange={handleChange} /><br />
          <input type="text" name="os" placeholder='Operating System' onChange={handleChange} /><br />
          <input type="number" name="sheight" placeholder='Screen Height' onChange={handleChange} /><br />
          <input type="number" name="swidth" placeholder='Screen Width' onChange={handleChange} /><br />
          <input type="number" name="price" placeholder='Price' onChange={handleChange} /><br />
          <input type="submit" />
       </form>
    </div>
  )
}

export default Form