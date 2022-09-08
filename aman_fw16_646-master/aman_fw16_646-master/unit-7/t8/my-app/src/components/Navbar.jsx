import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../redux/action';

export default function ButtonAppBar() {
    const dispatch= useDispatch();
    const login= useSelector((state)=>state.login)
    let navigate= useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:"black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=>{
            navigate("/")
          }}>
           Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=>{
            navigate("/employees")
          }}>
           Employess
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=>{
            navigate("/register")
          }}>
          Register
          </Typography>
          {login?<Button color="inherit" onClick={()=>{
             localStorage.setItem("token","");
             dispatch(logoutUser());
             navigate("/login")
          }}>LogOut</Button>:<Button color="inherit" onClick={()=>{
            navigate("/login")
          }}>Login</Button>}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
