import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function BasicTextFields() {
 const [rForm,setrForm]=useState({});
 const navigate= useNavigate();
 const handleChange=(e)=>{
   const{name,value}= e.target;
   setrForm({...rForm,[name]:value});
 }
const handleSubmit= (e)=>{
    e.preventDefault();
    axios.post("https://masai-api-mocker.herokuapp.com/auth/register",rForm)
    .then(({data})=>{
        console.log(data)
        if(data.error==false){
            navigate("/login")
        }else{
            alert(data.message)
        }
    })
    
    .catch((e)=>console.log(e));
}


  return (
    <>
    <h1>Register Account</h1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" type="text" name="name" onChange={handleChange} required/><br></br>
      <TextField id="outlined-basic" label="Email" variant="outlined" type={"email"} name="email" onChange={handleChange} required/><br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined" type={"password"} name="password" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" label="Username" variant="outlined" type={"text"} name="username" onChange={handleChange} required  /><br></br>
      <TextField id="outlined-basic" label="Mobile" variant="outlined" type={"number"} name="mobile" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" label="Description" variant="outlined" type={"text"} name="description" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" value="Register" variant="outlined" type={"submit"} /><br></br>
    </Box>
    
    </>

  );
}
