import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import styles from "./search.module.css"
import { useThrottle } from "rooks";
const Search = () => {
   const [country,setCountry]= useState([]);
   const [throttledFunction, isReady] = useThrottle(setCountry, 1000);
   let content_style;
  
   if(country.length>=5){
    content_style={
        overflowY: "scroll"
    }
   }else{
       content_style={
           overflowY: "visible"
       }
   }
   const handleChange= (e)=>{
    if(e.target.value==""){
        setCountry([])
        return
    }
     axios.get(`http://localhost:8080/country/${e.target.value}`)
     .then(({data})=>throttledFunction(data));
   }

  return (
    <div className={styles.main}>
        <input type="search" placeholder='Search Country' onChange={handleChange} />
        <div style={content_style} >
          {country.map((el,index)=>{
            return (
                <h3 key={index}>{el}</h3>
            )
          })}
        </div>
    </div>
  )
}

export default Search