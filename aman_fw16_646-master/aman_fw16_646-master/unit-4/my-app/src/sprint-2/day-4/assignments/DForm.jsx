import React,{useState} from 'react'
import styles from "./DForm.module.css"

function DForm() {

const [formData,setFormData]= useState({});
const handleChange= (e)=>{
    const inputName= e.target.name;
    if(e.target.type==='file'){
      setFormData({...formData,[inputName]:e.target.files})
    }else if(e.target.type==='checkbox'){
      setFormData({...formData,[inputName]:e.target.checked})
    }else{
      setFormData({...formData,[inputName]:e.target.value})
    }
}

   

    const handleSubmit= (e)=>{
     e.preventDefault()
     console.log(formData);
    }
  return (
    <div className={styles.main}>
    <form onSubmit={handleSubmit} >
         <label>User Name</label>
         <input type="text" name='username' onChange={handleChange} /><br></br>
         <label>Password</label>
         <input type="password" name='password' onChange={handleChange}/>
         <input type="checkbox"/><br />
         <label>Age</label>
         <input type="number" name="age" onChange={handleChange}/><br />
         <label>DOB</label>
         <input type="date" name="dob" onChange={handleChange}/><br />
         <label>Gender</label>
         <select  name="gender" onChange={handleChange}   >
           <option  value="M">MALE</option>
           <option value="F">FEMALE</option>
         </select><br />
         <label>Married</label> <br />
         <label >Yes</label><input type="radio"  name="genderRadio" value="yes" onChange={handleChange}/><br />
         <label>No</label><input type="radio" name="genderRadio" value="no" onChange={handleChange}/><br />
          <label>File</label>
          <input type="file" name="resume" onChange={handleChange}/><br />
          <input type="submit" />
    </form>

    </div>
  )
}



export default DForm

