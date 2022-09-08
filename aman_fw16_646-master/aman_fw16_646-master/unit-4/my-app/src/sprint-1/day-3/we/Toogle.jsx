import { useState } from "react"

export const Toogle=()=>{
  const[state,changeState]= useState("white")
  let count=0;
  const handleClick=()=>{
     
      if(count%2==1){
      changeState("pink");
      }else{
          changeState("white")
      }
      document.body.style.background= state;
      count++;
  }
   
    return(
        <button onClick={()=>handleClick()}>Change Mode</button>
    )
}