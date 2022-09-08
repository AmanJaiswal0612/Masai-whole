import React from 'react'
import { useTimer } from '../hooks/useTimer'

const GTimer = () => {
const{ miliSecond,second,minute,StartTimer,pauseTimer,resetTimer}= useTimer();


  return (
    <div>
        <h1>{miliSecond}</h1>
        <h1>{second}</h1>
        <h1>{minute}</h1>
        <button onClick={()=>StartTimer()} >Start Timer</button>
        <button onClick={()=>pauseTimer()} >Pause Timer</button>
        <button onClick={()=>resetTimer()}>Reset</button>
    
    </div>
  )
}

export default GTimer