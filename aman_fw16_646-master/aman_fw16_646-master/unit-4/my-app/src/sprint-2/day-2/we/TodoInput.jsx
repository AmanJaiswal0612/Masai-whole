import React, { useState } from 'react'

function TodoInput({addTodo}) {
  
const[inState,setinState]= useState("")
  return (
    <div>
        <input type="text" value={inState}
        onChange={(e)=>setinState(e.target.value)} 
        placeholder="Add NEW Todo"
        />
        <button onClick={()=>addTodo(inState)}>Add Todo</button>
        
    </div>
  )
}

export default TodoInput