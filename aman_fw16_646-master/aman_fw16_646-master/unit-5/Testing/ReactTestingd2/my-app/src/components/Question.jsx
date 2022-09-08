import React from 'react'

const Question = ({data}) => {
  return (
    <div>
       <h1 data-testid="question" >{data.question}</h1>
       <h2 data-testid="answer"  >{data.answer}</h2>
    </div>
  )
}

export default Question