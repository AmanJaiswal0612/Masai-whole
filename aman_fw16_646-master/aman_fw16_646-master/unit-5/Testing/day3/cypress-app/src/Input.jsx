import React, { useState } from 'react'

const Input = () => {
    const[value,setValue]=useState("")
  return (
    <div>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} autoFocus className='task-input' />
    </div>
  )
}

export default Input