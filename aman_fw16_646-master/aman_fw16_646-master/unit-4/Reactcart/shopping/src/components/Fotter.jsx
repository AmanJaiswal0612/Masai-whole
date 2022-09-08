import React from 'react'
import styles from './Fotter.module.css'
const Fotter = () => {
  return (
    <div className={styles.main}>
       <div >
             <p>London Store</p>
             <p>39 Morpeth Road</p>
             <p>Victoria ParkLondon E9 7LD</p>
             <p>Monday–Saturday</p>
             <p>11:00am–6:00pm</p>
             <p>Sunday</p>
             <p>11:00am–5:00pm</p>
       </div>
       <div>

        <p>Sales Office</p>
        <p>sales@hauslondon.com</p>
        <p>+44 (0)20 8533 8024</p>

       </div>
       <div>

        <p>About Us</p>
        <p>Wedding Gift Lists</p>
        <p>Jobs</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy & Cookies</p>
       </div>
       <div>
          <p>Trade and Contract Sales</p>
          <p>Delivery Rates</p>
          <p>Find Us</p>
          <p>Join Newsletter</p>
       </div>
    </div>
  )
}

export default Fotter