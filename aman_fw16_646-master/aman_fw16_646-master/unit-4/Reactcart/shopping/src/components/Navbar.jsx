import React, { useContext } from 'react'
import {NavLink} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import "./Navbar.css"
const Navbar = () => {
    const {isLogin}=useContext(AuthContext)
  return (
    <div>
     <div className="nav">
     <h3><NavLink className="link" style={{color:"white"}} to={"/"}>Home</NavLink></h3>
      <h3><NavLink className="link" style={{color:"white"}} to={isLogin?"/cart":"/login"}>Cart</NavLink></h3>
      <h3><NavLink className="link" style={{color:"white"}} to={"/about"}>About</NavLink></h3>
      <h3><NavLink className="link" style={{color:"white"}} to={"/login"}>Login</NavLink></h3>
      <h3><NavLink className="link" style={{color:"white"}} to={"/signup"} >Signup</NavLink></h3>
    </div>      
    
       
  
    </div>
  )
}

export default Navbar