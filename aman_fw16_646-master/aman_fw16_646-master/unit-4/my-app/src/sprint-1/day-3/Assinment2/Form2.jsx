import React, { useState } from 'react'

function Form2() {

let iniObj={
    Stname:"",
    age:"",
    hobbie:"",
}

const[state,setState]= useState(iniObj);
const{Stname,age,hobbie}=state
const handleChange= (e)=>{
console.log(e.target)
const {name,value}=e.target
setState({...state,[name]:value})
}

  return (
    <form>
        <input name='Stname' value={Stname} placeholder='Stname' onChange={handleChange} type="text" />
        <input name='age' value={age}placeholder='Age' onChange={handleChange} type="text" />
        <input name='hobbie' value={hobbie} placeholder='Hobbies' onChange={handleChange} type="text" />
    </form>
  )
}

export default Form2