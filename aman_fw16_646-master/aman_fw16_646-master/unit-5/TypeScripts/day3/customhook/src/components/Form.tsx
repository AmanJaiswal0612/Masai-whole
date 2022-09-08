

import React from 'react'
import { useMergeState } from '../hooks/useMergeState';
type Fdata={
    username:string;
    password:string;
    email:string
}
const Form = () => {
 const initState:Fdata={
     username:"",
     email:"",
     password:""    
 }
const{data,setState}=useMergeState(initState);

const handleSubmit= (e:React.SyntheticEvent)=>{
 e.preventDefault();
 console.log(data)
}

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" name="username" 
            onChange={(e)=>{
                setState(e.target.name,e.target.value)
            }} placeholder='username' /><br />
            <input type="email" name="email" placeholder='email' onChange={(e)=>{
                setState(e.target.name,e.target.value)
            }} /><br />
            <input type="password" onChange={(e)=>{
                setState(e.target.name,e.target.value)
            }} name="password" placeholder='password'/><br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form