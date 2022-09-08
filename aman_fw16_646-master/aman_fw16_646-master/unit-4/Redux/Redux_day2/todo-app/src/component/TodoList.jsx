import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {  getTodo } from "../redux/action";
import  {nanoid} from "nanoid"
import Todoitem from "./Todoitem";


export const TodoList= ()=>{
 const todos= useSelector((state)=>state.todos)
 const dispatch= useDispatch();
 useEffect(()=>{
   getTodo(dispatch);
 },[]);

 

  return(
    <div  >
      {todos.map((el)=>(
        <Todoitem key={nanoid()} {...el}/>
      ))}      
    </div>
  )
}