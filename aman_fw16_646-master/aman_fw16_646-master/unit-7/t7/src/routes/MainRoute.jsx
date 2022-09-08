import React from 'react'
import { Route, Routes } from 'react-router-dom'
import All from '../pages/All'
import Css from '../pages/Css'
import Home from '../pages/Home'
import Html from '../pages/Html'
import JavaScript from '../pages/JavaScript'

const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/all" element={<All/>}/>
        <Route path="/html" element={<Html/>}/>
        <Route path="/css" element={<Css/>}/>
        <Route path="/javascript" element={<JavaScript/>}/>
    </Routes>
  )
}

export default MainRoute
