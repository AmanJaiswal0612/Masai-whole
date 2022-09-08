import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styles from "./Blog.module.css"
const EditBlog = () => {
 const{id}=useParams(); 
 const navigate= useNavigate();
 const[editForm,seteditForm]=useState({});
 useEffect(()=>{
   axios.get(`http://localhost:8080/blog/${id}`)
   .then(({data})=>seteditForm(data[0]))
 },[])
 const handleChange=(e)=>{
  const{name,value}= e.target;
  seteditForm({...editForm,[name]:value})
 }
 const handleSubmit=(e)=>{
   e.preventDefault();
   console.log(editForm)
   axios.put(`http://localhost:8080/blog/${id}`,editForm)
   .then(()=>navigate("/blogs"));
 }

  return (
    <div className={styles.createbox} >
      <form onSubmit={handleSubmit} >
        <label>New Title</label><br />
        <input type="text" value={editForm.Title?editForm.Title:""} name="Title" onChange={handleChange} required /><br />
        <label >New Content</label><br />
        <textarea name="Body" value={editForm.Body?editForm.Body:""} onChange={handleChange} required /><br />
        <input type="submit" value={"Edit Blog"} />
      </form>
     
    </div>
  )
}

export default EditBlog