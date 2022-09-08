import {useState} from 'react'

function Toogle() {

  const[state,setState]= useState(true)  
  const handleChange= ()=>{
      setState(!state);
  }
  return (
    <div>
    <button onClick={()=>handleChange()}>Toogle</button> 
    {
       state ? <h1>Hide And Show</h1> :null
    }
    </div>
  )
}

export default Toogle
