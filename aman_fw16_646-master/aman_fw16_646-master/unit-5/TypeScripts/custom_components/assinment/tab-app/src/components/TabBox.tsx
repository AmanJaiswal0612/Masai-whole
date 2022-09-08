import React from 'react'
import Tab from './Tab'

const TabBox = () => {

const value:string[]=["one","two","three"]


const v1=(
    <>
    <h1>My name is aman Jaiswal</h1>
    <h2>I live in patna</h2>
    </>
)

const v2=(
    <>
    <form action="">
        <input type="text"/><br />
        <input type="time" name="" id="" /><br />
        <input type="button" value="Suvmit" />
    </form>
    </>
)

const v3=(
    <>
      <ul>
          <li>Java</li>
          <li>Pythom</li>
          <li>JavaScript</li>
      </ul>
    </>
)

const valData:any[]=[v1,v2,v3]

  return (
    <div>

   <Tab val={value} valD={valData} />
    
    </div>
  )
}

export default TabBox