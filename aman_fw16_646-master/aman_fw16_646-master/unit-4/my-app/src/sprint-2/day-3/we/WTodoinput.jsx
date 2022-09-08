import React,{useState} from 'react'

function WTodoinput({handleClick}) {
    
    const[state,setState]= useState("")
  return (
    <div>

       <input type="text"  value={state}onChange={(e)=>setState(e.target.value)} />
       <button onClick={()=>handleClick(state)}>Define Task</button>
       
    </div>
  )
}

export default WTodoinput