

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Image } from '../components/AboutDetail.styled';
import styles from "./Home.module.css"
const SingleProduct = () => {
  let navigate= useNavigate();
  let data= JSON.parse(localStorage.getItem("singleshow"));
  let cartdata=JSON.parse(localStorage.getItem("cartdata"))||[];
  return (
    <div className={styles.arrivaltop}>
       <div >
           <Image src={data.image}/>
       </div>
       <div>
           <h1>Product Name</h1>
           <p>The Box sofa takes its cues from mid-century Modernism and was designed for a interior in which all seating would be clustered at the centre of the space.To look handsome from every angle, Box features a deep seat and a short canted back with tapering brass-detailed legs attached deep under its belly, giving the boxy seat the impression that it is hovering above ground.</p>
           <h3>Details</h3>
           <h3>Made to Order 14 weeks</h3>
           <button 
           style={{color:"white",background:"skyblue",padding:"6px 10px",border:"none"}}
           onClick={()=>{
             cartdata=[...cartdata,data];
             localStorage.setItem("cartdata",JSON.stringify(cartdata));
             navigate("/cart")
           }}>Add to cart</button>
       </div>
    </div>
  )
}

export default SingleProduct