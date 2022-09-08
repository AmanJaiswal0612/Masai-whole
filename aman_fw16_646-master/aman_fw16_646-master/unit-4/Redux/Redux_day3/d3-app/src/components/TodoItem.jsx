import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTododata, editTodo } from '../redux/todo/action'
import styles from "./Todo.module.css"
const TodoItem = ({title,id}) => {
  const [editInput,setEditInput]= useState("")
  const [showedit,setShowedit]= useState(false)
  let dispatch= useDispatch()
    const handleDelete= ()=>{
       dispatch(deleteTododata(id))
    }
    const handleShow= ()=>{
      setShowedit(!showedit)
    }
    const handleTodo=()=>{
      let payload={
        title:editInput,
        id,
        status:false
      }
      dispatch(editTodo(payload))
    }
  return (
    <div>
      {!showedit?
         (<div className={styles.todos}>
             <h1>{title}</h1>
             <div>
             <button onClick={handleDelete}>Delete</button>
             <button onClick={handleShow}>Edit</button>
             </div>
         </div>):(<div className={styles.todos}>
           <div style={{marginTop:"60px"}} className={styles.entertodo}>
           <input style={{width:"200px"}} onChange={(e)=>setEditInput(e.target.value)} type="text" placeholder='Edit Todo'/>
           <button style={{width:"100px"}} onClick={handleTodo}>Edit Todo</button>
           </div>
           </div>)
      } 
        
    </div>
  )
}

export default TodoItem