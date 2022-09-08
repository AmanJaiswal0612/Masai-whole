import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const SignUp = () => {
const [sform,setsform]= useState({});
const handleChange=(e)=>{
    const{name,value}= e.target;
    setsform({...sform,[name]:value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8080/user/signup',sform)
}

  return (
    <div style={{width:"50%",margin:"auto"}}>

        <form onSubmit={handleSubmit} >
        <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
           <input type="text" className="form-control" name='Name' onChange={handleChange} required id="exampleInputPassword1"/>
        </div>   
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='Email' onChange={handleChange} required id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
           <input type="password" className="form-control" name='Password' onChange={handleChange} required id="exampleInputPassword1"/>
        </div>
      
        <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">Profile</label>
           <input type="text" placeholder='Linkdin' className="form-control" name='linkedin' onChange={handleChange} required id="exampleInputPassword1"/>
           <input type="text" placeholder='Facebook'  className="form-control" name='facebook' onChange={handleChange}  id="exampleInputPassword1" />
           <input type="text" placeholder='Github' className="form-control" name='github' onChange={handleChange} required id="exampleInputPassword1" />
           <input type="text" placeholder='Twitter'  className="form-control" name='twitter' onChange={handleChange}  id="exampleInputPassword1" />
           <input type="text" placeholder='Instagram' className="form-control" name='instagram' onChange={handleChange}  id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
           <input type="text" placeholder='Line1' className="form-control" name='line1' onChange={handleChange} required id="exampleInputPassword1"/>
           <input type="text" placeholder='City' className="form-control" name='city' onChange={handleChange} required id="exampleInputPassword1"/>
           <input type="text" placeholder='State' className="form-control" name='state' onChange={handleChange} required id="exampleInputPassword1"/>
           <input type="numbe" placeholder='Pincode' className="form-control" name='pincode' onChange={handleChange} required id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </div>
  )
}

export default SignUp