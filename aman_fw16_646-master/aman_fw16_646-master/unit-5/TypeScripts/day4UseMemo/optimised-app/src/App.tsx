import { nanoid } from 'nanoid';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import {MemoForm} from './components/Form';
import { TaskObj } from './components/Form';
import {MemoShow} from './components/Show';

function App() {
 const[count,setCount]=useState<number>(0);
 const[data,setData]= useState<TaskObj[]>([])
 let timerId:any= useRef();
useEffect(()=>{
 console.log("inside use effect")
 timerId.current=setInterval(()=>{
       setCount((prev)=>{
         return prev+1;
       })
 },2000)
},[])



const addTask=(payload:TaskObj)=>{
  console.log(payload)
 setData([...data,payload])
}

const cb = useCallback(addTask,[data])

const toogleVerify= (id?:string)=>{
   let ndata=data.map((el)=>{
     return (el.id===id?{...el,verify:!el.verify}:el)
   })
   setData(ndata)
}

const tooglecb = useCallback(toogleVerify,[data])

  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <div>
        <MemoForm addTask={cb} />
        <div id="box">
        {data.map((el)=>{
          return <MemoShow key={el.id} toggleVerify={tooglecb} {...el} />
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
