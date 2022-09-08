import { nanoid } from "nanoid";
import {useState} from "react"
import styles from "./Item.module.css"

function WTodoitem({title,id,handleDelete,onEdit}) {

const[edit,setedit]= useState(true);
const[instate,setinState]=useState("")
  const deleteTodo = async ()=>{
      await fetch(`http://localhost:8080/${id}`,{
      method: "DELETE",
      headers:{
       "Content-Type": "application/json"
     }
    })

    handleDelete(id)
  }

  
  

  const editTodo = async ()=>{
    
    let payload={
      title:instate,
      status:false,
      id:nanoid()
    }
    console.log(payload)
    let  res= await fetch(`http://localhost:8080/${id}`,{
      method : "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
    )
    onEdit();
  }
  return (
    edit? <div className={styles.main} >
        <h1>{title}</h1> 
        <button onClick={deleteTodo} >Delete</button>
        <button onClick={()=>setedit(false)}>Edit</button>
    </div>:<>
    <input placeholder="Write Change" value={instate} onChange={(e)=>setinState(e.target.value)}/>
    <button onClick={()=>editTodo()} >Edit</button>   
    </>
  )
}

export default WTodoitem