import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/action';

export default function BasicTextFields() {
 const dispatch= useDispatch();
 const [rForm,setrForm]=useState({});
 const navigate= useNavigate();
 const handleChange=(e)=>{
   const{name,value}= e.target;
   setrForm({...rForm,[name]:value});
 }
const handleSubmit= (e)=>{
    e.preventDefault();
    axios.post("https://masai-api-mocker.herokuapp.com/auth/login",rForm)
    .then(({data})=>{
        if(data.error){
            alert(data.message)
        }else{
            localStorage.setItem("user",rForm.username);
            localStorage.setItem("token",data.token)
            dispatch(loginUser(data.token))
            navigate("/")
        }
    })
    .catch((e)=>alert("invalid credentials"))
}


  return (
    <>
    <h1>Login</h1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField id="outlined-basic" label="Username" variant="outlined" type={"text"} name="username" onChange={handleChange} required /><br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined" type={"password"} name="password" onChange={handleChange} required  /><br></br>
      <TextField id="outlined-basic" value="Login" variant="outlined" type={"submit"} /><br></br>
    </Box>
    
    </>

  );
}