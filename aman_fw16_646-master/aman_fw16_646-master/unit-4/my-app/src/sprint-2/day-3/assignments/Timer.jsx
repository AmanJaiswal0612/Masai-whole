import React, { useEffect, useState } from 'react'

function Timer({start,end,time}) {
const[counter,setCounter]= useState(start);

useEffect(()=>{
  let id=setTimeout(()=>{
   setCounter(function (past){
       if(past===end){
           clearInterval(id);
           return past;
       }
       return past-1;
   })
   return clearInterval(id)
  },time)


},[counter])
  return (
    <>
    <h1>{counter}</h1>
    </>

  )
}

export default Timer