import { useState } from "react"
import {nanoid} from "nanoid"
import {TodoItem} from "./TodoItem"
import { Toogle } from "./Toogle";
const TodoList= ()=>{


  

const[task,setTask]= useState("");
const[login,setLogin]= useState(false);

const taskobj={
  name:task,
  id:nanoid(),
  status:false
}
const[todo,setTodo]= useState([]);



const handleChange=(e)=>{
  setTask(e.target.value)
}
const handleClick= ()=>{
  setTodo([...todo,taskobj])
}


const handleDelete=(id)=>{
 let newTask= todo.filter((el)=>{
   return el.id!=id;
 })
 setTodo(newTask)
}

const handleLogin=()=>{
setLogin(true);
}

const handleLogout=()=>{
  setLogin(false);
}


 
    if(!login){
      return(
        <>
        <h1>You Need  TO login First</h1>
        <button onClick={()=>handleLogin()}>LOGIN</button>
        </>
      )
    }  
    return(
        <>
        <input type="text"  value={task} onChange={handleChange}/>
        <button onClick={()=>handleClick()}>Add Task</button><br />
        {todo.length?todo.map((el)=>{
            return < TodoItem key={el.id} remove={handleDelete}  {...el}/>
        }):<h1>NO Task</h1>}
        <button onClick={()=>handleLogout()}>Logout</button><br />
        <Toogle/>
        </>
 
        
    )
}

export default TodoList