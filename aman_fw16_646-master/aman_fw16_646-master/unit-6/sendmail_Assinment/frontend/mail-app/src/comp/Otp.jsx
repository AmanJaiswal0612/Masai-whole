import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'



const Otp = () => {
 const [otp,setotp]= useState("")
 const navigate= useNavigate()
 const handleChange=(e)=>{
//    if(otp.length!=7){ 

//    }
   setotp(e.target.value)
   
 }


 const handleClick=()=>{
  let payload={otp}
  axios.post("http://localhost:8080/otp",otp)
  .then(({data})=>{
    alert(data)
    navigate("/")
  }).catch((e)=>{
    alert("invalid otp")
  })
 }
 


  return (
    <>
        <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">OTP</label>
    <input type="number" className="form-control"  name='otp' value={otp} placeholder='Otp' onChange={handleChange} id="exampleInputPassword1"/>
   </div>
    <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>
 
    </>

    
  )
}

export default Otp