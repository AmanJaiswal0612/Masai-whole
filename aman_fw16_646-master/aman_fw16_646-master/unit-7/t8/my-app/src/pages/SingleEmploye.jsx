import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
export default function SingleEmploye() {
    const [loading,setLoading]= React.useState(true);
    const navigate= useNavigate();
    const {id}= useParams();
    const [employ,setEmploy]= React.useState({});
    React.useEffect(()=>{
      axios.get(`https://mock-json-aman.herokuapp.com/api/employees/${id}`)
      .then(({data})=>setEmploy(data))
      .then(()=>setLoading(false))
    },[])
    
    if(loading==true){
        return (
            <Box sx={{ width: '80%', margin:"30px auto"}}>
              <LinearProgress />
            </Box>
          );
    }

  return (
    <Card sx={{ maxWidth: 345 }} style={{margin:"60px auto"}}>
      <CardMedia
        component="img"
        height="140"
        image={employ.image?employ.image:""}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {employ.name?employ.name:""}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{display:"flex",gap:"20px",justifyContent:"center"}}>
          <span>Age: {employ.age?employ.age:""}</span>
          <span>Gender: {employ.gender?employ.gender:""}</span>
          <span>Mobile: {employ.contact_number?employ.contact_number:""}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{display:"flex",gap:"20px",justifyContent:"center"}}>
          <span>Department: {employ.department?employ.department:""}</span>
          <span>Salary: {employ.salary?employ.salary:""}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={()=>navigate("/employees")}>Go back</Button>
      </CardActions>
    </Card>
  );
}
