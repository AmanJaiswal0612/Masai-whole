import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployees, addTodo } from '../redux/action';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));












export default function Todo() {
  const token = localStorage.getItem("token");
  const userId= localStorage.getItem('userId');  
  const [loading,setLoading]= React.useState(true);
  let row= useSelector((state)=>state.todo);
  const dispatch= useDispatch()
  const navigate= useNavigate();
  React.useEffect(()=>{
     getData()
  },[])


  const getData=()=>{
    console.log(userId,token)
    const config= {
        headers:{
            userid:userId,
            authorization:token
        }
    }
    axios.get('https://todo-app-aj.herokuapp.com/todos/',{headers:{"Authorization": `${token}`,userid:userId}})
    .then(({data})=>{
        console.log(data)
        dispatch(addTodo(data))})
    .then(()=>setLoading(false));
  }
   

  if(loading===true){
    return (
        <Box sx={{ width: '80%', margin:"30px auto"}}>
          <LinearProgress />
        </Box>
      );
  }

  const handleChange= (e)=>{
    if(e.target.value=="")return;
    const q=e.target.value;
    console.log(e.target.value)
    axios.get(`https://todo-app-aj.herokuapp.com/todos?status=${q}`,{headers:{"Authorization": `${token}`,userid:userId}})
    .then(({data})=>console.log(data))
  }

  return (
    

    <>
     <Stack spacing={2} direction="row" style={{diplay:"flex",justifyContent:"end",margin:"30px auto",width:"80%",}}>
      <Button style={{background:"black"}} variant="contained" onClick={()=>navigate("/create")}>Add New Todo</Button>
    </Stack>
    <select  onChange={handleChange}>
        <option value="">Filter By Status</option>
        <option value="done">Done</option>
        <option value="pending">Pending</option>
    </select>
    <TableContainer component={Paper} style={{margin:"60px auto",width:"80%"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="right">S.NO</StyledTableCell>
            <StyledTableCell align="right">Task</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Tag</StyledTableCell>
            <StyledTableCell align="right">View</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row,index) => (
            <StyledTableRow key={index}>
                <StyledTableCell align="right">{index+1}</StyledTableCell>
              <StyledTableCell align="right">{row.taskname}</StyledTableCell>
              <StyledTableCell align="right">{row.status?"Done":"Pending"}</StyledTableCell>
              <StyledTableCell align="right">{row.tag}</StyledTableCell>
              <StyledTableCell align="right" onClick={()=>{
                 navigate(`/employees/${row._id}`)
              }} >view</StyledTableCell>
              <StyledTableCell align="right" onClick={()=>{
                 axios.delete(`https://todo-app-aj.herokuapp.com/todos/delete/${row._id}`,{
                    headers: {'Authorization':token},
                })
                 .then(()=>{
                    getData()
                 })
              }} >Delete</StyledTableCell>
              <StyledTableCell align="right" onClick={()=>{
                 navigate(`/edit/${row._id}`)
              }} >Edit</StyledTableCell>
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    
  );
}
