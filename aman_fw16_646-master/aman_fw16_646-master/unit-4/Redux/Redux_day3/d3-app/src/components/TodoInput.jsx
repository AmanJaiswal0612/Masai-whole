import React, { useEffect, useState } from 'react'
import {nanoid} from "nanoid"
import { useDispatch } from 'react-redux';
import { getTododata, getTodoError, getTodoLoading, getTodosuccess } from '../redux/todo/action';
import styles from "./Todo.module.css"
const TodoInput = () => {
 const [title,setTitle]= useState("");
 const dispatch= useDispatch()

 const handleAdd= ()=>{
     const payload={
         title,
         id:nanoid(),
         status:false
     }
     fetch(`http://localhost:3003/todos`,{
         method: "POST",
         body:JSON.stringify(payload),
         headers: {
             "Content-Type":"application/json"
         }
     }).then(()=>{
        dispatch(getTododata())
     })
     
     setTitle("")
 }
 
  return (
    <div className={styles.entertodo} >
      
      <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Todo" value={title} />
      <button onClick={handleAdd}>ADD TODO</button>
    </div>
  )
}

export default TodoInput