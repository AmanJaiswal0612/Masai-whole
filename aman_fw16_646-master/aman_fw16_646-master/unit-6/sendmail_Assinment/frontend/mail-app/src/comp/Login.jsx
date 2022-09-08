import React, { useState } from 'react'
import axios from "axios"
const Login = () => {
    const[lform,setlform]= useState({});
    const handleChange= (e)=>{
        const{name,value}= e.target;
        setlform({...lform,[name]:value})
    }


    const handleSubmit= (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/signin",lform)
        .then(({data})=>{
               console.log(data)
        }).catch((e)=>alert("Wrong Credencial"))
    }   
  return (
    <div>
          <form onSubmit={handleSubmit} >
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

export default Login