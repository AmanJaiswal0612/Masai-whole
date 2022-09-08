import React, { useEffect, useState } from 'react'

import TodoInput from './TodoInput';
import axios, { AxiosResponse } from "axios"

const Todo = () => {
type Tdata={
    title:string;
    id:number;
    status:boolean;
}


 
const[todo,setTodo]=  useState<Tdata[]>([])
const[input,setInput]= useState<string>("");


useEffect(()=>{
getData()
},[])

const getData = ()=>{
  axios.get("http://localhost:8080/todos")
  .then((res:AxiosResponse<Tdata[]>)=>{
    const{data}= res;
    setTodo(data)
  })
}

// const handleClick= (payload:Tdata)=>{
//    setTodo([...todo,payload])
// }

  return (
    <div>
       <input onChange={(e)=>setInput(e.target.value)} value={input}/>
       <button onClick={()=>{
          const payload={
            status:false,
            title:input
          }
          axios.post("http://localhost:8080/todos",payload)
          .then(()=>getData())
          
       }}>
         Add Todo
       </button>
       {/* <TodoInput handleClick={handleClick}/> */}
       {todo.map((el)=>{
         return(<h1 key={el.id} >{el.title}---{el.id}</h1>)
       })}
    </div>
  )
}

export default Todo