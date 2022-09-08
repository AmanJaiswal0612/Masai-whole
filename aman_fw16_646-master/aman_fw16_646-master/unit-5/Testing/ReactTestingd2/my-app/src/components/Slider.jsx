import React, { useState } from 'react'
import Question from './Question';


export const data=[{question:"What is your name?",answer:"My name is Aman",id:1},
{question:"What is your proffession?",answer:"I am a full stack web-developer",id:2},
{question:"What are your hobbies?",answer:"Coding is my hoobie",id:3},]

const Slider = () => {

    const [show,setShow]=useState(0);
  return (
    <div data-testid="div" >
      <Question data={data[show]} />
      
      <button data-testid="next"  disabled={show===data.length-1}  onClick={()=>setShow(show+1)} >NextQuestion</button>
      <button  data-testid="prev" disabled={show===0} onClick={()=>setShow(show-1)} >PreviousQuestion</button>
    </div>
  )
}

export default Slider