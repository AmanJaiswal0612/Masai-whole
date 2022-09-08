import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import CreateEmploy from '../pages/CreateEmploy'
import EditEmploy from '../pages/EditEmploy'
import Employees from '../pages/Employees'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SingleEmploye from '../pages/SingleEmploye'

const MainRoute = () => {
  const login = useSelector((state)=>state.login)
  return (
    <Routes>
        <Route path="/" element={login?<Home/>:<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/employees" element={login?<Employees/>:<Login/>}/>
        <Route path="/employees/create" element={login?<CreateEmploy/>:<Login/>}/>
        <Route path="/employees/:id" element={login?<SingleEmploye/>:<Login/>}/>
        <Route path="/employees/:id/edit" element={login?<EditEmploy/>:<Login/>}/>
    </Routes>
  )
}

export default MainRoute