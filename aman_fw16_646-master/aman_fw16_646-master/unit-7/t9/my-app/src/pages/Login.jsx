import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';
import { loginUser, setUser } from '../redux/action';
import { useNavigate } from 'react-router-dom';









export default function Login() {
const [fdata,setFdata]= React.useState({});
const [loading,setLoading]= useState(false);
const navigate= useNavigate();
const dispatch= useDispatch()
const handleChange= (e)=>{
    const {name,value}= e.target;
    
    setFdata({...fdata,[name]:value})
}

const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
        const {email,password}= fdata;
        setLoading(true);
        let res= await axios.get('https://mock-json-aman.herokuapp.com/api/user')
        let {data}= await res;
        let flag=false;
        let val=null;
        for(let i=0;i<data.length;i++){
           if(data[i].email==email&&data[i].password==password){
              flag= true;
              val=i;
           }
        }
        if(flag==true){
            setLoading(false);
            dispatch(loginUser())
            dispatch(setUser(data[val]));
            navigate("/")
        }else{
            setLoading(false)
            alert('invalid Credencials')
        }
    }catch(e){
        alert('network Error')
    }
   
}


  return (
    <>
    <h1>LOGIN</h1>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35%' },
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" name='email' type="email" onChange={handleChange}  variant="outlined" required /><br />
      <TextField id="outlined-basic" label="Password" name='password' type="password" onChange={handleChange}  variant="outlined" required /><br />
      <TextField id="outlined-basic" value={"Login"} type="submit" variant="outlined" />
      {loading?<Box sx={{ display: 'flex' ,justifyContent:'end' }}>
      <CircularProgress />
      </Box>:null}
    </Box>
    </>
   
  );
}
