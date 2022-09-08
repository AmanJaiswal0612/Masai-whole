import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./Home.module.css"


const Singup = () => {
  let user= JSON.parse(localStorage.getItem("user"))||[]; 
  const navigate= useNavigate()
  const [signupFormData,setSignupFormData]= useState({});  
    const handleChange=(e)=>{
        let field=e.target;
        setSignupFormData({...signupFormData,[field.name]:field.value});
      }
    const handleSubmit=(e)=>{
        e.preventDefault();
        user=[...user,signupFormData]
        localStorage.setItem("user",JSON.stringify(user))
        navigate("/login")
    }  
  return (
  <div className={styles.login}>
    <div><h2>Register for an <br/>Account</h2></div>  
    <div>
       <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder='Name' onChange={handleChange}/><br />    
        <input type="email" name='email' placeholder='Email' onChange={handleChange}/><br />
        <input type="password" name='password' placeholder='Choose a Password' onChange={handleChange} /><br />
        <input type="number" name="mnumber" placeholder='Mobile Number' onChange={handleChange}/><br/>
        <input type="submit" placeholder='Register'/> 
     </form>
    </div>
  </div> 
  )
}

export default Singup