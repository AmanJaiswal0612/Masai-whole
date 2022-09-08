import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../pages/Blog'
import ConfirmDelete from '../pages/ConfirmDelete'
import CreateBlog from '../pages/CreateBlog'
import DeletedBlog from '../pages/DeletedBlog'
import EditBlog from '../pages/EditBlog'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import SingleBlog from '../pages/SingleBlog'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blogs" element={<Blog/>}/>
            <Route path="/blogs/create" element={<CreateBlog/>}/>
            <Route path ="/blogs/:id" element={<SingleBlog/>}/>
            <Route path="blogs/:id/edit" element={<EditBlog/>}/>
            <Route path="/blogs/:id/delete" element={<ConfirmDelete/>}/>
            <Route path="/blogs/trash" element={<DeletedBlog/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path= "/signin" element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes