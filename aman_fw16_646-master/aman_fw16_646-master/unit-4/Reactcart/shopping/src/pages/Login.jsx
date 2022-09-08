import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from "./Home.module.css"
const Login = () => {
  const [formData,setFormData]= useState({});
  const{setLogin}= useContext(AuthContext);
  const handleChange=(e)=>{
    let field=e.target;
    setFormData({...formData,[field.name]:field.value});
  }
  const user= JSON.parse(localStorage.getItem("user"));
  const navigate= useNavigate();
  const handleSubmit= (e)=>{
    e.preventDefault();
    let flag=false;
    for(let i=0;i<user.length;i++){
      if(formData.email===user[i].email&&formData.password===user[i].password){
        flag=true;
      }
    }
    if(flag===true){
    setLogin(true);
    navigate("/")
    }else{
      alert("Invalid Details")
    }
  }
  return (
    <div className={styles.login}>
    <div><h2>Returning Customer</h2></div>
     <div>
     <form onSubmit={handleSubmit}>    
        <input type="email" name='email' placeholder='Enter Your Email' onChange={handleChange}/><br />
        <input type="password" name='password' placeholder='Enter Your Password' onChange={handleChange} /><br />
        <input type="submit" />
     </form>
      <h3> <Link style={{color:"black",textDecoration:"none"}} to={"/signup"}>Register For An Account</Link></h3>
     </div>
   
    </div>
  )
}

export default Login