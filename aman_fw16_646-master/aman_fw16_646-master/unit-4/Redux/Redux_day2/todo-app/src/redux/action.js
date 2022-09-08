import { ADDTOOD, DELETE_TODO, GET_TODOS, TOGGLE_STATUS } from "./actionType"
import axios from "axios"

export const addTodo= (payload)=>{
  return{
    type:ADDTOOD,
    payload
  }
}


export const getTodo= async (dispatch)=>{
  let res= await fetch("http://localhost:8080/todos");
  let data= await res.json();
    dispatch({
    type:GET_TODOS,
    payload:data,
  })
}

export const deleteTodo= async (dispatch,id)=>{
  let res= await fetch(`http://localhost:8080/todos/${id}`,{
    method:"DELETE",
    headers :{"Content-type":"application/json"}
  })
  dispatch({
    type:DELETE_TODO,
    payload:id
  })
//  console.log(id);
  // let r= await axios.delete(`http://localhost:8080/todos/${id}`);
  
}

export const toogleStatus= (payload)=>{
  return{
    type:TOGGLE_STATUS,
    payload
  }
}