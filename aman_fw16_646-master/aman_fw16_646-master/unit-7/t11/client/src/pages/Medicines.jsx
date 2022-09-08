import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Medicines = () => {
    const [meds,setmeds]= useState([])
    const {id}= useParams();
    useEffect(()=>{
      axios.get(`https://doctor-app-aman.herokuapp.com/medicine/${id}`)
      .then(({data})=>setmeds(data))
    },[])

  return (
    <div>
        <h1>Medicines</h1>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>qty</th>
                </tr>
            </thead>
            <tbody>
            {meds.map((el,index)=>{
               return(
                <tr key={index}>
                    <td>{el.name}</td>
                    <td>{el.qty}</td>
                </tr>
               )
               })}
            </tbody>
        </table>
       
    </div>
  )
}

export default Medicines