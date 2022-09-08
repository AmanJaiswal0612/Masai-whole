import { useEffect, useRef, useState } from "react"


export const useTimer=()=>{

const[miliSecond,setMiliSecond]=useState<number>(0);
const[second,setSecond]=useState<number>(0);
const[minute,setMinute]=useState<number>(0);
const[start,setStart]=useState<boolean>(false);


let miliSecondID:any= useRef();
let secondID:any= useRef();
let minuteID:any= useRef();

useEffect(()=>{
  if(start===true){  
  startTimer()
  }
  if(start===false){
     return pauseTimer()
  }

},[start])

const StartTimer=()=>{
    setStart(true);
}

const pauseTimer=()=>{
    clearInterval(miliSecondID.current);
    clearInterval(secondID.current);
    clearInterval(miliSecondID.current)
    setStart(false);
}

const resetTimer=()=>{
    clearInterval(miliSecondID.current);
    clearInterval(secondID.current);
    clearInterval(miliSecondID.current);
    setMiliSecond(0);
    setSecond(0);
    setMinute(0);
    setStart(false)
}

const startTimer=()=>{
miliSecondID.current=setInterval(()=>{
 setMiliSecond((prev)=>{
   if(prev==100){
       prev=0
   }   
   return prev+1
 })
},10)

secondID.current=setInterval(()=>{
    setSecond((prev)=>{
        if(prev==60){
            prev=0
        }
        return prev+1
    })
},1000)

minuteID.current=setInterval(()=>{
    setMinute((prev)=>{
        return prev+1
    })
},60000)

}




return {
    miliSecond,
    second,
    minute,
    StartTimer,
    pauseTimer,
    resetTimer
}

}