import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import {Markup} from "interweave"
import { useEffect } from 'react';

const Login = () => {
const[lform,setlform]= useState({});
const [atag,setatag]=useState("")

useEffect(()=>{
    axios.get("http://localhost:8080/user/gitlogin")
    .then(({data})=>{
      setatag(data)
    })
},[])
console.log( typeof atag)
const handleChange= (e)=>{
    const{name,value}= e.target;
    setlform({...lform,[name]:value})
}
const handleSubmit= (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/user/signin",lform)
    .then(({data})=>{
            const{user,token}=data;
            console.log(user,token)
            localStorage.setItem("token",token);
            localStorage.setItem("user",JSON.stringify(user[0]))
    }).catch((e)=>alert("Wrong Credencial"))
}


  return (
    <div>
        <form onSubmit={handleSubmit} >
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='Email' placeholder='Email' onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='Password' placeholder='Password' onChange={handleChange} id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
       <Markup content={atag} ></Markup>
       <h1 onClick={()=>{
        axios.get("http://localhost:8080/user/github/calback")
        .then(({data})=>console.log(data))
       }}>Login With github</h1>
    </div>
  )
}

export default Login