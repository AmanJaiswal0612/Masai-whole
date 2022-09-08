import React from 'react'

function Box({value,onClick}) {
  return (
    <div onClick={onClick}>{value}</div>
  )
}

export default Box