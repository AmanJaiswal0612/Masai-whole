import { useState } from "react"
import BtnChild from "./BtnChild"


export const ChildToParent= ()=>{



const[count,setCount]= useState(0);

const handleChange= (val)=>{
    setCount(count+val)
  }
  return(
      <div>
          <h1>Child To Parent</h1>
          <BtnChild value={count} handleDecrement={handleChange} handleIncrement={handleChange}/>
      </div>
  )
}