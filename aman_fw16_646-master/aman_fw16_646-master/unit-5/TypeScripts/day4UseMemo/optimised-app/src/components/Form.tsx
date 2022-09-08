import { nanoid } from 'nanoid';
import React, { memo, useState } from 'react'

type FormProps={
    addTask : (payload:TaskObj)=> void;
}
export type TaskObj={
    title:string;
    body:string;
    verify:boolean;
    id:string
}

const Form = ({addTask}:FormProps) => {
    // console.log("inside form")
   const [title,setTitle]= useState<string>("");
   const [body,setBody]= useState<string>("");
   
   const handleClick = ()=>{
      let payload= {
          title,
          body,
          verify:false,
          id:nanoid()
      }
      addTask(payload)
   }

  return (
    <div id="form" >
        
           <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} /><br />
           <textarea  placeholder='Descriptopn' value={body} onChange={(e)=>setBody(e.target.value)} ></textarea><br />
           <button onClick={handleClick} >Add</button>
        
    </div>
  )
}

export const MemoForm= memo(Form)

