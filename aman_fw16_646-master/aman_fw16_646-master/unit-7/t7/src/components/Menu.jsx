import React from 'react'
import styles from './style.module.css'
import {Link} from "react-router-dom"
const Menu = () => {
    
  return (
    <div className={styles.nav} >
        <Link to="/all"><h3>All</h3></Link>
        <Link to="/html"><h3>HTML</h3></Link>
        <Link to="/css"><h3>CSS</h3></Link>
        <Link to="/javascript"><h3>JavaScript</h3></Link>
    </div>
  )
}

export default Menu