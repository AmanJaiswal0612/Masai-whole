import { useState } from "react"

import styles from "./todo.module.css"


import { nanoid } from "nanoid"


export const Todo=()=>{
    const [task,setTask]= useState("")
    const [todo,setTodo]= useState([])
    const handleChange=(e)=>{
       setTask(e.target.value)
    } 
    const handleclick=()=>{
        setTodo([...todo,task])
    }
    return(
        <div>
              <h1>Add Any Task</h1>
              <input className={styles.todosearch} type="text" placeholder="Enter Any Tsk" value={task} onChange={handleChange}/>
              <button  className={styles.todobtn} onClick={()=>handleclick()}>+</button>
              {todo.map((el)=>{
                   return <h1 key={nanoid()} className={styles.todoitem}>{el}</h1>
              })}
        </div>
        
    )
}