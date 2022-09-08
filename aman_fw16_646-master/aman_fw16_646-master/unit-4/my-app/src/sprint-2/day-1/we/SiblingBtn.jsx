import React from 'react'

function SiblingBtn({lebel,handleChange}) {
  return (
     <button onClick={handleChange}>{lebel}</button>
  )
}

export default SiblingBtn