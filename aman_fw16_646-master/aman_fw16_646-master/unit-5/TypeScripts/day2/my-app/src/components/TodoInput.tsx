import { nanoid } from 'nanoid';
import React, { useState } from 'react'

const TodoInput = ({handleClick}:any) => {
  type Tdata={
    title:string;
    id:string;
    status:boolean;
  }
  


  const [todoInput,setTodoInput]= useState<string>("")
  const handleTsubmit=()=>{
      let payload:Tdata={
        id:nanoid(),
        status:false,
        title:todoInput
      }
      handleClick(payload)
  }  
  return (
    <div>
      <input type="text" value={todoInput} onChange={(e)=>setTodoInput(e.target.value)} /><br/>
      <button onClick={handleTsubmit} >Add Todo Items</button>
    </div>
  )
}

export default TodoInput