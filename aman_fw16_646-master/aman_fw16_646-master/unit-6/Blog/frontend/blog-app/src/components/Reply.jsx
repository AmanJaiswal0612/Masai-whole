import axios from 'axios';
import React from 'react'

import { useEffect } from 'react';
import { useState } from 'react'

const Reply = ({cid,Ccount}) => {
    const [replyD,setReplyD]=useState([]);
    useEffect(()=>{
      axios.get(`http://localhost:8080/comment/reply/${cid}`)
      .then(({data})=>{
        setReplyD(data);
      })
    },[Ccount])
  return (
    <div>{replyD.map((el,index)=>{
       return(
        <div key={index}>
            {el.Message}
            {el.Rating}
        </div>    
       )
    })}</div>
    
  )
}


export default Reply