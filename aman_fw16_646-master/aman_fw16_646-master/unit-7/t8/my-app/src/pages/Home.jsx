import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const Home = () => {
    const [loading,setLoading]= useState(true);
    const username= localStorage.getItem("user")
    const [user,setUser]= useState({});
    const token= useSelector((state)=>state.token)
 useEffect(()=>{
   getProfile();
 },[])

 const getProfile= ()=>{

    const config={
        headers:{
            "Authorization": `Bearer ${token}`
        }
    }
   axios.get(`https://masai-api-mocker.herokuapp.com/user/${username}`,config)
   .then(({data})=>setUser(data))
   .then(()=>setLoading(false));
     
 }

 if(loading==true){
    return (
        <Box sx={{ width: '80%', margin:"30px auto"}}>
          <LinearProgress />
        </Box>
      );
 }

 return (
    <Card sx={{ minWidth: 275,marginTop:"100px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {user.name?user.name:null}
        </Typography>
        <Typography variant="h5" component="div">
          {user.email?user.email:null}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user.username?user.username:null}
        </Typography>
        <Typography variant="body2">
         {user.mobile?user.mobile:null}
          <br />
          {user.description?user.description:null}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Home