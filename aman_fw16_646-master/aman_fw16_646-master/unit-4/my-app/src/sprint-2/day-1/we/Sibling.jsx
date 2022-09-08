import { useState } from "react"
import SiblingBtn from "./SiblingBtn"



export const Sibling = ()=>{
    const[count,setCount]= useState(0);
    const handleChange =(val)=>{
       setCount(count+val)
    }
    return(
        <>
           <h1>Sibling</h1>
           <h2>Total Count={count}</h2>
           <SiblingBtn lebel="+" handleChange={()=>handleChange(+1)} />
           <SiblingBtn lebel="-" handleChange={()=>handleChange(-1)}/>
        </>
    )
}