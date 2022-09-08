import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
export default function EditEmploy() {
const {id}= useParams();
const [rForm,setrForm]=useState({});
useEffect(()=>{
    axios.get(`https://mock-json-aman.herokuapp.com/api/employees/${id}`)
    .then(({data})=>setrForm(data));
},[])

 const navigate= useNavigate();
 const handleChange=(e)=>{
   const{name,value}= e.target;
   setrForm({...rForm,[name]:value});
 }
const handleSubmit= (e)=>{
    e.preventDefault();
    axios.put(`https://mock-json-aman.herokuapp.com/api/employees/${id}`,rForm)
    .then(({data})=>{
        navigate("/employees")
       console.log(data)
    })
    .catch((e)=>console.log(e));
}


  return (
    <>
    <h1>Edit Employee</h1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
    
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField id="outlined-basic" value={rForm.name?rForm.name:""} label="" variant="outlined" type={"text"} name="name" onChange={handleChange} required={true}/><br></br>
      <TextField id="outlined-basic" value={rForm.age?rForm.age:""} label="" variant="outlined" type={"number"} name="age" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" value={rForm.gender?rForm.gender:""} label="" variant="outlined" type={"text"} name="gender" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" value={rForm.contact_number?rForm.contact_number:""} label="" variant="outlined" type={"number"} name="contact_number" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" value={rForm.department?rForm.department:""} label="" variant="outlined" type={"text"} name="department" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" value={rForm.salary?rForm.salary:""} label="" variant="outlined" type={"number"} name="salary" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" value={rForm.image?rForm.image:""} label="" variant="outlined" type={"text"} name="image" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" value="Create" variant="outlined" type={"submit"} /><br></br>
    </Box>
    
    </>

  );
}