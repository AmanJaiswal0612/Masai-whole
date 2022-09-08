
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import CreatePatints from '../pages/CreatePatints'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Medicines from '../pages/Medicines'
import Signup from '../pages/Signup'
import Table from '../pages/Table'

const MainRoute = () => {
 const login = useSelector((state)=>state.login)

  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/createpatient" element={<CreatePatints/>}></Route>
        <Route path="/meds/:id" element={<Medicines/>}></Route>
        <Route path="/patients/:id" element={login?<Table/>:<Login/>} ></Route>
    </Routes>
  )
}

export default MainRoute