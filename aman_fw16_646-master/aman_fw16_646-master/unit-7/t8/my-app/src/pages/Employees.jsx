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
import { addEmployees } from '../redux/action';
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}










export default function CustomizedTables() {
  const [loading,setLoading]= React.useState(true);
  let row= useSelector((state)=>state.employees);
  const dispatch= useDispatch()
  const navigate= useNavigate();
  React.useEffect(()=>{
     getData()
  },[])


  const getData=()=>{
    axios.get('https://mock-json-aman.herokuapp.com/api/employees')
    .then(({data})=>dispatch(addEmployees(data)))
    .then(()=>setLoading(false));
  }
   

  if(loading===true){
    return (
        <Box sx={{ width: '80%', margin:"30px auto"}}>
          <LinearProgress />
        </Box>
      );
  }

  return (
    

    <>
     <Stack spacing={2} direction="row" style={{diplay:"flex",justifyContent:"end",margin:"30px auto",width:"80%",}}>
      <Button style={{background:"black"}} variant="contained" onClick={()=>navigate("/employees/create")}>Add New Employee</Button>
    </Stack>

    <TableContainer component={Paper} style={{margin:"60px auto",width:"80%"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Mobile</StyledTableCell>
            <StyledTableCell align="right">Department</StyledTableCell>
            <StyledTableCell align="right">Salary</StyledTableCell>
            <StyledTableCell align="right">Details</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.age}</StyledTableCell>
              <StyledTableCell align="right">{row.gender}</StyledTableCell>
              <StyledTableCell align="right">{row.contact_number}</StyledTableCell>
              <StyledTableCell align="right">{row.department}</StyledTableCell>
              <StyledTableCell align="right">{row.salary}</StyledTableCell>
              <StyledTableCell align="right" onClick={()=>{
                 navigate(`/employees/${row.id}`)
              }} >view</StyledTableCell>
              <StyledTableCell align="right" onClick={()=>{
                 axios.delete(`https://mock-json-aman.herokuapp.com/api/employees/${row.id}`)
                 .then(()=>{
                    getData()
                 })
              }} >Delete</StyledTableCell>
              <StyledTableCell align="right" onClick={()=>{
                 navigate(`/employees/${row.id}/edit`)
              }} >Edit</StyledTableCell>
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    
  );
}
