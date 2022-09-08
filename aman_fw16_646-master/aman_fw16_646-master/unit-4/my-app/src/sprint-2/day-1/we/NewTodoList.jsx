import React from 'react'

function NewTodoList({val,id,status,handleDelete,handleToogle}) {
  return (
      <>
      <div>{val}</div>
    <button onClick={()=>handleDelete(id)}>Delete</button>
    <button onClick={()=>handleToogle(id)}>{status?"True":"False"}</button>
      </>
    
  )
}

export default NewTodoList