import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTododata, getTodoError, getTodoLoading, getTodosuccess } from '../redux/todo/action'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import styles from "./Todo.module.css"
import  {nanoid} from "nanoid"
const Todo = () => {
 const {loading,error,todos}= useSelector((state)=>state.todos)
    const dispatch= useDispatch();
  useEffect(()=>{
   dispatch(getTododata())
  },[])


  return loading?(<h1>Loading...</h1>):error ?(<h1>Errorr..</h1>) :(
    <div>
        <TodoInput/>
        <div className={styles.todomain}>
        {todos.map((el)=>{
            return <TodoItem {...el} key={nanoid()}/>
        })}
        </div>
    </div>
  )
}

export default Todo