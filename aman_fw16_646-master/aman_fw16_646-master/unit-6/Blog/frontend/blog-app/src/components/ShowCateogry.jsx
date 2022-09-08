import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Cateogry = ({category}) => {
  const[cat,setCat]=useState([])
  if(category.length>1){
  var query= category.join("&q=")
  }else{
   query=category[0]
  }
  console.log(query)
  useEffect(()=>{
    axios.get(`http://localhost:8080/category/?q=${query}`)
    .then(({data})=>setCat(data))
  },[])

   
  return (
    <div>
      <span>category &#x21E8;</span>
      {cat.map((el,index)=>{
        return(
          <span key={index}>{el.Name}, </span>
        )
      })}
    </div>
  )
}

export default Cateogry