import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';

const TodoInput = () => {
 const[title,setTitle]=useState("");
 const dispatch= useDispatch();
 const handleClick= async ()=>{
  let payload={
      title,
      status:false,
      id:nanoid()
  }
  let res= await fetch (`http://localhost:8080/todos`,{
      method:"POST",
      headers :{"Content-type":"application/json"},
      body: JSON.stringify(payload)
  })
  
   const action= addTodo(payload);
    dispatch(action)
 }
  return (
    <div>

      <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} placeholder="Enter TASKS"/>
      <button onClick={handleClick}>ADD </button>

    </div>
  )
}

export default TodoInput