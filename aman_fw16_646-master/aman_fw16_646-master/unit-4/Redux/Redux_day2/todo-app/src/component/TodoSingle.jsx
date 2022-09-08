

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { deleteTodo } from '../redux/action';

const TodoSingle = () => {
    const {id}= useParams();
    const [single,setSingle]=useState("")
    const navigate= useNavigate()
    useEffect(()=>{
        const getData= async ()=>{
            let res= await fetch(`http://localhost:8080/todos/${id}`);
            let data= await res.json();
            console.log(data);
            setSingle(data.title)
        }
        getData()
    },[])
    let dispatch= useDispatch();
    const handleDelete= ()=>{
        deleteTodo(dispatch,id)
        navigate("/")
    }
  return (
    <div>

       <h1>{single}</h1>
       <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TodoSingle