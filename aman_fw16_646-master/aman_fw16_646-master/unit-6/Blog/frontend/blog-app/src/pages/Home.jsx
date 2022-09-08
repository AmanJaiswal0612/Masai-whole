import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import AllBlogItem from '../components/AllBlogItem';

const Home = () => {
  let[allD,setAllD]=useState([]);
  useEffect(()=>{
   axios.get(`http://localhost:8080/blog/`)
   .then(({data})=>setAllD(data))
  },[])
  return (
    <div>
      <h1 style={{fontSize:"65px",margin:"auto", color:"white",background:"rgb(32, 32, 32)", width:"max-content"}}>Popular Blogs</h1>
      {allD.map((el,index)=>{
        return(
          <AllBlogItem key={index} index={index} {...el} />
        )
      })}
      
    </div>

  )
}

export default Home