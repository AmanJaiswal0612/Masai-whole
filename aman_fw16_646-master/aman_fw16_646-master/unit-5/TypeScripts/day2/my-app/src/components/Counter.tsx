import React, {useState} from 'react'


type CounterProps={
    init?:number
}
const Counter = (props:CounterProps) => {
  const{init=5}= props;
  const[Count,setCount]=useState (init) 
  return (
    <>
    <h1>{Count}</h1>
    <button onClick={()=>setCount(Count+1)} >Add1</button>
    </>
  )
}

export default Counter