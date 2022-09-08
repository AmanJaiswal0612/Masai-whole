import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <nav className="navbar navbar-dark bg-dark" >
       <h3><Link to="/">Home</Link></h3>
       <h3><Link to="/blogs">MyBlogList</Link></h3>
        <h3><Link to="/blogs/create" >Create Blog</Link></h3>
        <h3><Link to="/blogs/trash" >Deleted Blogs</Link></h3>
        <h3><Link to="/signin">Login</Link></h3>
</nav>
  
  )
}

export default Navbar