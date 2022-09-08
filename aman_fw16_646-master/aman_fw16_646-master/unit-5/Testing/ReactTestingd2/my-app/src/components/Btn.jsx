import React from 'react'

const Btn = ({children,onClick}) => {
  return (
    <div style={{border:"2px solid black",padding:"5px 10px",width:"20%",margin:"10px auto"}} onClick={onClick} >{children}</div>
  )
}

export default Btn