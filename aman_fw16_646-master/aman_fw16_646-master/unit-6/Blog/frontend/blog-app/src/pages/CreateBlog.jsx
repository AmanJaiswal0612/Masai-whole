import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Blog.module.css"
const CreateBlog = () => {
  const [done,setDone]= useState(false);
  const fobj={Title:"",Body:"",movies:false,poltics:false,sports:false,education:false,finance:false}
  const[fdata,setFdata]=  useState(fobj);
  const navigate= useNavigate();
  const user= JSON.parse(localStorage.getItem("user"));
  const token=localStorage.getItem("token")

useEffect(() => {
  if(!token){
    alert("Please Login First");
    navigate("/signin")
    return
  } 
   
}, [])

  
 const handleChange= (e)=>{
  setDone(false);
  const{name,value,type,checked}= e.target;
  if(type=="checkbox"){
    setFdata({...fdata,[name]:checked})
  }else{
  setFdata({...fdata,[name]:value});
  }
 }
 const handleSubmit= (e)=>{
  e.preventDefault();
  if(fdata.Title&&fdata.Body){
    let payload= {...fdata,user:user}
    axios.post("http://localhost:8080/blog/",payload,{headers:{"Authorization": `Bearer ${token}`}})
    .then(()=>{setDone(true)
     setFdata(fobj)
    })
  }
 }

  return (
    <div className={styles.createbox} >
      <form onSubmit={handleSubmit} >
        <label>Title to Blog</label><br />
        <input type="text" name="Title"  value={fdata.Title} placeholder='Title' onChange={handleChange} required /><br />
        <label>Content of Blog</label><br />
        <textarea name='Body' placeholder='Content' value={fdata.Body} onChange={handleChange} required /><br />
        <label >Cateogry</label><br />
        <input id="check" name='movies' checked={fdata.movies}  onChange={handleChange} type="checkbox" /> <label>Movies</label>
        <input id="check" name='poltics' checked={fdata.poltics} onChange={handleChange} type="checkbox"/> <label>Poltics</label>
        <input id="check" name='sports' checked={fdata.sports} onChange={handleChange} type="checkbox"/> <label>Sports</label>
        <input id="check" name='education' checked={fdata.education} onChange={handleChange} type="checkbox"/> <label>Education</label>
        <input id="check" name='finance' checked={fdata.finance} onChange={handleChange} type="checkbox"  /><label>Finance</label><br />
        <input  type="submit" value={"Create"} />
      </form>
      {
        done?(<div className="alert alert-success" role="alert">
               <h4 className="alert-heading">Well done!</h4>
               <p>Aww yeah, you successfully created a blog. </p>
               <hr/>
              <p onClick={()=>navigate("/blogs")} className="mb-0">Click here to see your blog</p>
      </div>):null
      }
 
    </div>
  )
}

export default CreateBlog