import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';







export default function Create() {
const [fdata,setFdata]= React.useState({});
const [loading,setLoading]= useState(false);
const doctorId= localStorage.getItem("userId")
const navigate= useNavigate();
let [meds,setMeds]= useState([]);
const handleChange= (e)=>{
    const {name,value}= e.target;
    if(name=="medicine"){
      setMeds([...meds,value]);
      setFdata({...fdata,meds:meds});
    }else{
      setFdata({...fdata,[name]:value})
    }
    
}

const handleSubmit=(e)=>{
    e.preventDefault();
    let obj={
        ...fdata,
        doctorId
    }
    console.log(obj)
    setLoading(true);
    axios.post('https://doctor-app-aman.herokuapp.com/patient',obj)
    .then(({data})=>{setLoading(false)
    }).then(()=>navigate("/"))
    .catch((e)=>console.log(e))
}


  return (
    <>
    <h1>Create Patient</h1>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35%' },
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" name="name" type="text" onChange={handleChange} variant="outlined" required /><br />
      <select name="gender" required onChange={handleChange}>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
       </select><br />
       <select name="medicine" required onChange={handleChange}>
            <option value="">Medicine1</option>
            <option value="paracetamol">paracetamol</option>
            <option value="GRAPHITE">GRAPHITE</option>
            <option value="Antifungal">Antifungal</option>
            <option value="Capsaicin, Lidocaine, Menthol, and Methyl Salicylate">Capsaicin, Lidocaine, Menthol, and Methyl Salicylate</option>
            <option value="bexarotene">bexarotene</option>
            <option value="CITALOPRAM">CITALOPRAM</option>
            <option value="aluminum hydroxide dried gel and magnesium hydroxide and simethicone">aluminum hydroxide dried gel and magnesium hydroxide and simethicone</option>
            <option value="Standardized Sweet Vernal Grass Pollen">Standardized Sweet Vernal Grass Pollen</option>
            <option value="OCTINOXATE, OCTISALATE, AVOBENZONE, OCTOCRYLENE">OCTINOXATE, OCTISALATE, AVOBENZONE, OCTOCRYLENE</option>
            <option value="Oak,">Oak,</option>
            <option value="enoxaparin sodium">enoxaparin sodium</option>
       </select><br />
       <select name="medicine" required onChange={handleChange}>
            <option value="">Medicine1</option>
            <option value="paracetamol">paracetamol</option>
            <option value="GRAPHITE">GRAPHITE</option>
            <option value="Antifungal">Antifungal</option>
            <option value="Capsaicin, Lidocaine, Menthol, and Methyl Salicylate">Capsaicin, Lidocaine, Menthol, and Methyl Salicylate</option>
            <option value="bexarotene">bexarotene</option>
            <option value="CITALOPRAM">CITALOPRAM</option>
            <option value="aluminum hydroxide dried gel and magnesium hydroxide and simethicone">aluminum hydroxide dried gel and magnesium hydroxide and simethicone</option>
            <option value="Standardized Sweet Vernal Grass Pollen">Standardized Sweet Vernal Grass Pollen</option>
            <option value="OCTINOXATE, OCTISALATE, AVOBENZONE, OCTOCRYLENE">OCTINOXATE, OCTISALATE, AVOBENZONE, OCTOCRYLENE</option>
            <option value="Oak,">Oak,</option>
            <option value="enoxaparin sodium">enoxaparin sodium</option>
       </select><br />
       <select name="medicine" required onChange={handleChange}>
            <option value="">Medicine1</option>
            <option value="paracetamol">paracetamol</option>
            <option value="GRAPHITE">GRAPHITE</option>
            <option value="Antifungal">Antifungal</option>
            <option value="Capsaicin, Lidocaine, Menthol, and Methyl Salicylate">Capsaicin, Lidocaine, Menthol, and Methyl Salicylate</option>
            <option value="bexarotene">bexarotene</option>
            <option value="CITALOPRAM">CITALOPRAM</option>
            <option value="aluminum hydroxide dried gel and magnesium hydroxide and simethicone">aluminum hydroxide dried gel and magnesium hydroxide and simethicone</option>
            <option value="Standardized Sweet Vernal Grass Pollen">Standardized Sweet Vernal Grass Pollen</option>
            <option value="OCTINOXATE, OCTISALATE, AVOBENZONE, OCTOCRYLENE">OCTINOXATE, OCTISALATE, AVOBENZONE, OCTOCRYLENE</option>
            <option value="Oak,">Oak,</option>
            <option value="enoxaparin sodium">enoxaparin sodium</option>
       </select><br />
       <select name="medicine" required onChange={handleChange}>
            <option value="">Medicine1</option>
            <option value="paracetamol">paracetamol</option>
            <option value="GRAPHITE">GRAPHITE</option>
            <option value="Antifungal">Antifungal</option>
            <option value="Capsaicin, Lidocaine, Menthol, and Methyl Salicylate">Capsaicin, Lidocaine, Menthol, and Methyl Salicylate</option>
            <option value="bexarotene">bexarotene</option>
            <option value="CITALOPRAM">CITALOPRAM</option>
            <option value="aluminum hydroxide dried gel and magnesium hydroxide and simethicone">aluminum hydroxide dried gel and magnesium hydroxide and simethicone</option>
            <option value="Standardized Sweet Vernal Grass Pollen">Standardized Sweet Vernal Grass Pollen</option>
            <option value="OCTINOXATE, OCTISALATE, AVOBENZONE, OCTOCRYLENE">OCTINOXATE, OCTISALATE, AVOBENZONE, OCTOCRYLENE</option>
            <option value="Oak,">Oak,</option>
            <option value="enoxaparin sodium">enoxaparin sodium</option>
       </select><br />
      <TextField id="outlined-basic" label="Age" name='age' type="number" onChange={handleChange}  variant="outlined" required /><br />
      <TextField id="outlined-basic" value={"Create Patient"} type="submit" variant="outlined" />
      {loading?<Box sx={{ display: 'flex' ,justifyContent:'end' }}>
      <CircularProgress />
      </Box>:null}
    </Box>
    </>
   
  );
}