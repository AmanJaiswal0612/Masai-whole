import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import CreateTodo from '../pages/CreateTodo'
import EditTodo from '../pages/Edit'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const MainRoute = () => {
 const login = useSelector((state)=>state.login)

  return (
    <Routes>
        <Route path="/" element={login?<Home/>:<Login/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path ="/create" element={<CreateTodo/>}></Route>
        <Route path="/edit/:id" element={<EditTodo/>}></Route>
    </Routes>
  )
}

export default MainRoute