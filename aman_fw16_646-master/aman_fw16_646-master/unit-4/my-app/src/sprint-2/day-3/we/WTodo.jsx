import { nanoid } from 'nanoid';
import React,{useEffect, useState} from 'react'
import WTodoitem from './WTodoitem'
import WTodoinput from './WTodoinput';
function WTodo() {
 const[todo,setTodo]=useState([]);
  



 const handleDelete = async (id)=>{
  let newData= todo.filter((el)=>{
      return el.id!==id;
  })
  setTodo([...newData])
}

const onEdit = (newTodo)=>{
  const newTodos= todo.map((el)=>{
     if(el.id===newTodo.id) return newTodo;
     else return el;
  })

  setTodo(newTodos);
}


 useEffect(()=>{
    getData();
 },[])


const getData= async ()=>{
try{
   let res= await fetch(`http://localhost:8080/`);
   let data= await res.json();
   setTodo(data.todos);
}catch(err){
  console.log(err)
}
}






 const  setData= async (title)=>{
     let taskobj={
         title,
         id:nanoid(),
         status:true
     }
     let res= await fetch(`http://localhost:8080/`,{
     method : "POST",
     headers:{
       "Content-Type": "application/json"
     },
     body: JSON.stringify(taskobj)
    }
     )
    setTodo([...todo,taskobj])
 } 


  return (
    <div>
        <h1>aGAIN A TODO</h1>
        <WTodoinput handleClick={setData}  />
        {todo.map((el)=>{
         return <WTodoitem key={nanoid()}{...el} handleDelete={handleDelete} onEdit={getData}  />
        })}
    </div>
  )
}

export default WTodo



//json-server --watch db.json