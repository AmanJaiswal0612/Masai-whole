import React from 'react'
import { nanoid } from 'nanoid'
import styles from "./ProductSlider.module.css"
import { useNavigate } from 'react-router-dom'
const Productslider = ({data}) => {
let navigate = useNavigate()

  return (
    <div className={styles.pimg} >
       {data.map((el)=>(
                <div key={nanoid()} onClick={()=>{
                       localStorage.setItem("singleshow",JSON.stringify(el));
                       navigate("/product")           
                }} >
                  <div>
                    <img src={el.image} alt="image" />
                  </div>
                  <div>
                      <h2></h2>
                      <p></p>
                      <p></p>
                  </div>
               </div>
       ))}
     
    </div>
  )
}

export default Productslider