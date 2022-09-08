import React, { useState } from 'react'

function Button() {
const [count,setCount]= useState(0)
 
  return (
    <>
    <button onClick={()=>setCount(count+1)}>Add</button>
    <button onClick={()=>setCount(count-1)}>Minus</button>
    <h1>Count is:{count}</h1>
    </>
  )
}

export default Button