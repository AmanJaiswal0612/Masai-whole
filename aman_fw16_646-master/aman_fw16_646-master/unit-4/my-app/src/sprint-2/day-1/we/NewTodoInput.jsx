import React, { useState } from 'react'

function NewTodoInput({handleAdd}) {
    const [title,setTitle]= useState("");
  return (
    
    <div>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <button onClick={()=>handleAdd(title)}>ADD</button>
    </div>
  )
}

export default NewTodoInput