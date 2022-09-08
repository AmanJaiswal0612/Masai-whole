import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function CreateEmploy() {
 const [rForm,setrForm]=useState({});
 const navigate= useNavigate();
 const handleChange=(e)=>{
   const{name,value}= e.target;
   setrForm({...rForm,[name]:value});
 }
const handleSubmit= (e)=>{
    e.preventDefault();
    axios.post("https://mock-json-aman.herokuapp.com/api/employees",rForm)
    .then(({data})=>{
        navigate("/employees")
       console.log(data)
    })
    .catch((e)=>console.log(e));
}


  return (
    <>
    <h1>Create Employee</h1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
    
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField id="outlined-basic" label="name" variant="outlined" type={"text"} name="name" onChange={handleChange} required={true}/><br></br>
      <TextField id="outlined-basic" label="age" variant="outlined" type={"number"} name="age" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" label="gender" variant="outlined" type={"text"} name="gender" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" label="mobile" variant="outlined" type={"number"} name="contact_number" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" label="department" variant="outlined" type={"text"} name="department" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" label="salary" variant="outlined" type={"number"} name="salary" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" label="image url" variant="outlined" type={"text"} name="image" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" value="Create" variant="outlined" type={"submit"} /><br></br>
    </Box>
    
    </>

  );
}