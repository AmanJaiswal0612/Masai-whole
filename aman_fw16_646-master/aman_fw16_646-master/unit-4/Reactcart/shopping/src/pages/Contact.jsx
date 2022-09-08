import React from 'react'
import styles from './Home.module.css'
const Contact = () => {
  return (
    <div style={{padding:"30px"}}>

     <div>
         <div>
             <h1>Contact</h1>
         </div>
         <div>
             <p>For all sales and order enquiries please email us</p>
             <p>anytime<span><h3>sales@hauslondon.com</h3></span></p>
             <h3>Shop open: <br/>Monday - Saturday 11am-6pm, Sunday 11am-5pm</h3>
             <p>Please wear a face covering, respect social distancing and wait to enter if we are already busy.</p>
             <h3>You can also book a priority consultation here:<br/>Book a consultation</h3>
             <p>Most consultations will be for up to 30 minutes. <br/>Do check ahead if you want to see a particular product - we offer thousands of products online and have a limited selection of these on display at any time.
             <br/>We are here to provide additional product information, help and advice. We can assist by email and arrange material samples by post.<br/>Haus<br/>39 Morpeth Road<br/>London<br/>E9 7LD</p>
             <h3>Shop: +44 (0)208 533 8024 <br/>Follow us on Instagram: <br/>@hauslondon</h3>
             <h3>Customer Collection</h3>
             <p>We offer a 'Click & Collect'. Most smaller collections will be from our shop (E9)<br/> however large items of furniture may require collection from <br/>our nearby warehouse (E3).</p>
         </div>
         <div style={{display:"flex"}}>
             <div><h1>How to get Our Shop</h1></div>
             <div>
                 <h3>show in google maps<br/>by car</h3>
                 <p>There is free on street parking available on weekdays after midday, <br/>and all weekend.<br/>We are not in the Congestion Charging Zone.</p>
             </div>
             <div></div>
         </div>
     </div>


    </div>
  )
}

export default Contact