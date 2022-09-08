import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "./Blog.module.css"
const ConfirmDelete = () => {
  const navigate=useNavigate();
  const{id}= useParams();
  const handleDelete=()=>{
    axios.delete(`http://localhost:8080/blog/${id}`)
    .then(()=>navigate("/blogs"))
  }
  return (
    <div className={styles.ConfirmDelete} >
      <h2>Please confirm if you want to delete this blog</h2>
      <div><button onClick={()=>handleDelete()}>Yes</button> <button onClick={()=>navigate("/blogs")} >No</button></div> 
    </div>
  )
}

export default ConfirmDelete