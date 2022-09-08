import React from 'react'
import "../App.css"


const Button = ({children,colorScheme,variant,onClick}) => {
  return (
    <button data-testid="cButton" onClick={onClick} className={`btn ${colorScheme|| "red"} ${variant || "ghost"}`} >{children}</button>
  )
}

export default Button