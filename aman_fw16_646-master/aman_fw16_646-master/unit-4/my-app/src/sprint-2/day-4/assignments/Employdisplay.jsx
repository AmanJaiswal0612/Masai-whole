import React from 'react'
import Employ from "./Employ.css"

function Employdisplay({username,age,department,married,salary,address}) {
  return (
    <>
      <tr>
          <td>{username}</td>
          <td>{age}</td>
          <td>{address}</td>
          <td>{department}</td>
          <td>{salary}</td>
          <td>{married?"Yes":"No"}</td>
      </tr>
    
    </>
  )
}

export default Employdisplay