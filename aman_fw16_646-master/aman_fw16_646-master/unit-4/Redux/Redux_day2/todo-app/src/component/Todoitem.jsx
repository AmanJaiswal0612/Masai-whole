import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteTodo, toogleStatus } from '../redux/action';

const Todoitem = ({id,title,status}) => {
    const dispatch= useDispatch();
    
    

    const handleDelete=  ()=>{
        deleteTodo(dispatch,id);
    }
    const handleToogle= async ()=>{
      let payload={
        title,
        id,
        status:!status
      }
      dispatch(toogleStatus(id))
      let res=await fetch(`http://localhost:8080/todos/${id}`,{
        method:"PATCH",
        body: JSON.stringify(payload),
        headers :{"Content-type":"application/json"}
      })
    }
   
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
        
        <div><Link to={`${id}`}>{title}</Link></div>
        <div>{status?"True":"False"}</div>
        <button onClick={handleToogle}>Toogle Status</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Todoitem