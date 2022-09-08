

import React from 'react'

export default function BtnChild({value,handleDecrement,handleIncrement}) {
  return (
      <>
    <div>
       <button onClick={()=>handleDecrement(-1)}>-</button>
       <button onClick={()=>handleIncrement(1)}>+</button>
    </div>
    <h1>Count is{value}</h1>
      </>
 
    
  )
}
