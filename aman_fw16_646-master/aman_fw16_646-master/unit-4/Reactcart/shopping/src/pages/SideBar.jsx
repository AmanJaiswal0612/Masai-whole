import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
       <img src="https://th.bing.com/th/id/OIP.BAAbkLSNzXaQ5TfyYSwjoQHaDh?pid=ImgDet&rs=1" alt="" />
       <h2><NavLink style={{color:"black"}} className="link" to={"/arrival"}>New Arrivals</NavLink></h2>
       <h2><NavLink style={{color:"black"}}className="link" to={"/furnitures"}>Furniture</NavLink></h2>
       <h2>Lighting</h2>
       <h2>Accessories</h2>
       <h2>Brand</h2>
       <h2>Clearance</h2>
       
       <h3><NavLink style={{color:"grey"}} className="link" to={"/contact"}>Contact</NavLink></h3>
       <h3><NavLink style={{color:'grey'}} className="link" to={"/about"}>About</NavLink></h3>
       <h3>Delivery</h3>
    </div>
  )
}

export default SideBar