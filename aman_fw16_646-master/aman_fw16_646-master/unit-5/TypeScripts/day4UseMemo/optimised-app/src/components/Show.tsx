import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import { TaskObj } from './Form'

type Showprops={
    toggleVerify:(id:string)=>void
}
const Show = ({body,id,title,verify,toggleVerify}:TaskObj&Showprops) => {
    console.log(toggleVerify)
    const[color,setColor]= useState<string>("");
    const generateRandomColor= ():void=>{
       setColor(Math.random().toString(16).substr(-6))
    }
    useEffect(()=>{
        console.log("inside ShowEffect")
          setTimeout(()=>{
            generateRandomColor();
          },2000)
    },[])




    // let color= useMemo(()=>{
    //    return Math.random().toString(16).substr(-6);
    // },[])
    
    
    
    const handleClick= ()=>{
        if(id===undefined){
            return;
        }
        if(id!==undefined){
            toggleVerify(id)
        }
        
    }
    console.log(color)
    console.log("inside show")
  return (
    <div>
      <div>
         <h1>{title}</h1>
         <h3>{body}</h3>
         <label >{verify?"Verifed":"Not Verified"}</label>
         <button onClick={handleClick} >{verify?"UnVeriFy Now":"Verify Now"}</button>
      </div>
  
         <div style={{width:"80px",height:"80px",borderRadius:"50%" ,background:`#${color}`}} ></div>
    </div>
  )
}


export const MemoShow= memo(Show)
