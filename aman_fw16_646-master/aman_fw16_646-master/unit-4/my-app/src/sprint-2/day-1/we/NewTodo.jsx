import { useState } from "react"
import NewTodoInput from "./NewTodoInput"
import NewTodoList from "./NewTodoList"
import { nanoid } from "nanoid"


export const NewTodo= ()=>{

   const [data,setData]= useState([]);
   const handleAdd= (val)=>{
      const payLoad= {
         val,
         status: false,
         id: nanoid()
      }
      setData([...data,payLoad])
   }

   const handleDelete= (id)=>{
      let newData=data.filter((el)=>{
           return el.id!=id;
      })
      setData(newData)
   }
   const handleToogle= (id)=>{
      const updatedData= data.map((item)=> { return item.id===id? {...item,status: !item.status}:item})
      setData(updatedData)
   }
   return (
       <div>
          <NewTodoInput handleAdd={handleAdd}/>
          {
             data.map((el)=>{
                return <NewTodoList handleDelete={handleDelete} handleToogle={handleToogle} key={el.id}{...el}/>
             })
          }
       </div>
   )
}