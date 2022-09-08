import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from"axios"
import {  useNavigate, useParams } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {  addPatient } from '../redux/action';
const Table = () => {
    const flats= useSelector((state)=>state.patient)
    const userId= localStorage.getItem("userId")
    const dispatch= useDispatch()
    let navigate= useNavigate();
    let {id}= useParams();
    if(id==undefined){
        id=1;
    }
    if(id<1){
        id=1
    }
   
    
    useEffect(()=>{
      getdata() 
    },[id])

    const getdata= ()=>{
      console.log(userId)
        axios.get(`https://doctor-app-aman.herokuapp.com/patient?page=${id}&limit=3`,{headers:{"doctor":userId}})
      .then(({data})=>{
        console.log(data)
        dispatch(addPatient(data))
      })
    }

   

    
    if(flats.length===0){
      const goTo= +id-1;
      return(
        <>
        <h1>No More Data</h1>
        <h2 onClick={()=>navigate(`/patients/${goTo}`)} >Come Back</h2>
        </>
        
      )
    }



 

 

  return (
    <>
    <h2>PageNo:{id}</h2>
    <button style={{width:"20%", height:"45px",margin:"10px"}}  onClick={
      ()=>{
        navigate('/createpatient')
      }
    } >Add Patients</button>
      <div>
        
        <table className="table table-hover">
           <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>No Of Medicines</th>
                <th>View</th>
            </tr>
           </thead>
           <tbody>
            {flats.map((el,index)=>{
               return(
                   <tr key={index} >
                      <td>{el.name}</td>
                      <td>{el.age}</td>
                      <td>{el.gender}</td>
                      <td>{el.medIds.length?el.medIds.length:""}</td>
                      <td onClick={()=>navigate(`/meds/${el._id}`)} >View</td>
                   </tr>
               )
            })}
           </tbody>
        </table>
    </div>
    <Pagination/>
    </>
  
  )
}

export default Table