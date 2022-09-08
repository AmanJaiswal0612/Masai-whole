import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';







export default function Signup() {
const [fdata,setFdata]= React.useState({});
const [loading,setLoading]= useState(false);
const navigate= useNavigate()
const handleChange= (e)=>{
    const {name,value}= e.target;
    setFdata({...fdata,[name]:value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    axios.post('https://doctor-app-aman.herokuapp.com/doctor/signup',fdata)
    .then(({data})=>{setLoading(false)
    }).then(()=>navigate("/login"))
    .catch((e)=>console.log(e))
}


  return (
    <>
    <h1>SignUp</h1>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35%' },
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" name="name" type="text" onChange={handleChange} variant="outlined" required /><br />
      <TextField id="outlined-basic" label="Email" name='email' type="email" onChange={handleChange}  variant="outlined" required /><br />
      <TextField id="outlined-basic" label="Password" name='password' type="password" onChange={handleChange}  variant="outlined" required /><br />
      <TextField id="outlined-basic" value={"Signup"} type="submit" variant="outlined" />
      {loading?<Box sx={{ display: 'flex' ,justifyContent:'end' }}>
      <CircularProgress />
      </Box>:null}
    </Box>
    </>
   
  );
}
