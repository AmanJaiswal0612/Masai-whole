import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate= useNavigate();
    const [sform,setsform]= useState({});
const handleChange=(e)=>{
    const{name,value}= e.target;
    setsform({...sform,[name]:value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8080/signup',sform)
    .then(()=>navigate("/otp"))
}
  return (
    <div>

     <form onSubmit={handleSubmit} >
         <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' placeholder='Name' onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>  
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' placeholder='Email' onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' placeholder='Password' onChange={handleChange} id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </div>
  )
}

export default Signup