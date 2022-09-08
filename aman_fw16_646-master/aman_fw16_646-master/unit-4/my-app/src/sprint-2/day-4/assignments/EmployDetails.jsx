import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import Employdisplay from './Employdisplay';
import { EmployForm } from './EmployForm'
import Employ from "./Employ.css"
function EmployDetails() {
const[detail,setDetail]= useState([]);

useEffect(()=>{
getData()
},[])

const getData= async ()=>{
    let res= await fetch("http://localhost:3000/todo");
    let data= await res.json();
    setDetail(data)
}
const newdata= (fdata)=>{
   setDetail([...detail,fdata])
}

  return (
     <>
      <EmployForm newdata={newdata}/>
      <table id='employtable' >
        <thead>
            <tr>
              <th>Employ Name</th>
              <th>Employ Age</th>
              <th>Employ Address</th>
              <th>Employ Department</th>
              <th>Employ Salary</th>
              <th>Employ marital status</th>
            </tr>
        </thead>
        <tbody>

           {detail.map((el)=>{
            return <Employdisplay key={nanoid()} {...el}/>
           })}
        </tbody>
      </table>
    
     </> 
   
  )
}

export default EmployDetails