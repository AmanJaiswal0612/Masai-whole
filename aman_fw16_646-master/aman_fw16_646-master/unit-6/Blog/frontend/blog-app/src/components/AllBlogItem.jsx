import React, { useState } from 'react'
import { useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom"

const AllBlogItem = ({_id,Title,Body,CreatedAt,index}) => {
  
 
  const[time,setTime]= useState("");
  
  useEffect(()=>{
    const currDate= new Date();
    const createDate= new Date(CreatedAt);
    let diff= currDate.getTime() - createDate.getTime()
    let diffInDays= diff/(1000*3600*24);
    if(diffInDays<1){
      diffInDays=Math.round(24*diffInDays)
      diffInDays=diffInDays+"  hours ago"; 
    }else{
      diffInDays=Math.round(diffInDays);
      diffInDays=diffInDays+"  days ago"
    }
    setTime(diffInDays)
 
  },[])
  
  return (
    
    <>
    
<div className="card text-center">
  <div className="card-header">
    Blog {index+1}
  </div>
  <div className="card-body">
    <h5 className="card-title">{Title}</h5>
    <Link to={`/blogs/${_id}`} className="btn btn-primary">Read More</Link>
  </div>
  <div className="card-footer text-muted">
    {time}
  </div>
</div>
    
    </>
   
  )
}

export default AllBlogItem