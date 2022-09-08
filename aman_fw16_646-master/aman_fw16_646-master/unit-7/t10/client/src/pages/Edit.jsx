import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
export default function EditTodo() {
 const {id}= useParams();
 const [todo,setTodo]= useState([])
 let [rForm,setrForm]=useState({});
 const navigate= useNavigate();
 const userId= localStorage.getItem("userId");
 const token= localStorage.getItem("token");
React.useEffect(()=>{
  axios.get(`https://todo-app-aj.herokuapp.com/todos/${id}`,{
    headers: {'Authorization':token}
}).then(({data})=>setTodo(data))
},[])

 const handleChange=(e)=>{
   let{name,value}= e.target;
   if(name=="status"){
    if(value=="done"){
        value=true;
    }else{
        value=false;
    }
   }

   setrForm({...rForm,[name]:value});
 }
const handleSubmit= (e)=>{
    e.preventDefault();
    const obj={
        ...rForm,
         userId
    }
    console.log(token)
    axios.put(`https://todo-app-aj.herokuapp.com/todos/edit/${id}`,obj,{
        headers: {'Authorization':token},
    })
    .then(({data})=>{
        navigate("/")
       console.log(data)
    })
    .catch((e)=>console.log(e));
    console.log(obj)
}


  return (
    <>
    <h1>Create Todo</h1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
    
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField id="outlined-basic" value={todo.length?todo[0].taskname:""} label="Task Name" variant="outlined" type={"text"} name="taskname" onChange={handleChange} required={true}/><br></br>
       <select name="status"  required onChange={handleChange}>
            <option value="">Status</option>
            <option value="done">Done</option>
            <option value="pending">Pending</option>
       </select><br />
       <select name="tag" value={todo.length?todo[0].tag:""} required onChange={handleChange}>
        <option value="personal">Tag</option>
        <option value="personal">personal</option>
        <option value="official">official</option>
        <option value="family">family</option>
       </select><br />
      <TextField id="outlined-basic" value="Edit" variant="outlined" type={"submit"} /><br></br>
    </Box>
    
    </>

  );
}