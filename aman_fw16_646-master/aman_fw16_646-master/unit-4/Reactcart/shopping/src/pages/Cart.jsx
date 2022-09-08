import React, { useState } from 'react'
import { Image } from '../components/AboutDetail.styled';
import styles from "./Home.module.css"


const Cart = () => {
  let data= JSON.parse(localStorage.getItem("cartdata"));
  let [buy,setbuy]= useState("");
  let total= data.reduce((acc,el)=>{
      return acc+Number(el.price);
  },0)
  return (
  <div>
    <div className='cart' >
      {data.map((el)=>(
        <div className={styles.arrivaltop}>
           <div>
             <Image src={el.image}/>
           </div>
           <div>
             <h3>{el.price}</h3>
           </div>
        </div>
      ))}
      <div>
      <h1>Total Cart Price</h1>
      <h1>{total}</h1>
      <button onClick={()=>setbuy("Thank You for  Purchasing")}
      style={{padding:"7px 15px",background:"skyblue",border:"none",color:"white"}}>Buy Now</button>
      <h1>{buy}</h1>
      </div>
      
    </div>

  </div> 
  )
}

export default Cart