import React from 'react'
import styles from './Home.module.css'
import { homeData,homeData2,homeData3 } from '../Data'
import Productslider from './Productslider'
import { Fotterupper, H1,Image, Logo } from '../components/AboutDetail.styled'
import BigSlider from './BigSlider'


const Home = () => {
  return (
    <div>
       <div>

        <div className={styles.first}>
           <h1>20% OFF HEY SHOES</h1>
           <h2>Special offer -until 30 April</h2>
        </div>

        <div >
           <Productslider data={homeData} />
        </div>
         
         <div>
           <Fotterupper bg="dimgray">
             <H1 size="40px">UK Seller</H1>
             <H1 size="25px">No Import Duty for UK Coustumer</H1>
           </Fotterupper>
         </div>
         <div>
           <BigSlider/>
         </div>
          
          <div>
            <Productslider data={homeData2}/>
          </div>

          <div>
            <Productslider data={homeData3}/>
          </div>

          <div>
            <Fotterupper bg="darkslategray">
              <H1 font="40px">Free UK Parcel Delivery Over $1000</H1>
              <H1 font="25px">1H Time Slot Navigation</H1>
            </Fotterupper>
          </div>
          <div className={styles.imgdiv}>
            <Image style={{height:"100%"}} src="https://cdn.shopify.com/s/files/1/0053/2792/files/block_1_bg_image_1024x.jpg?v=1494240675"></Image>
            <Image src="https://cdn.shopify.com/s/files/1/0053/2792/files/3_Platform_5_Architects_Backwater_12_1024x.jpg?v=1494248006"></Image>
          </div>
          <div className={styles.logodiv}>
            <Logo src="https://cdn.shopify.com/s/files/1/0053/2792/files/vitra.logo1_300x.jpg?v=1494428684"/>
            <Logo src="https://cdn.shopify.com/s/files/1/0053/2792/files/hay.logo2_300x.jpg?v=1494428879"></Logo>
            <Logo src="https://cdn.shopify.com/s/files/1/0053/2792/files/delaespada.logo1_300x.jpg?v=1494429081"></Logo>
            <Logo src="https://cdn.shopify.com/s/files/1/0053/2792/files/Haus.Flos.Logo.300x250._8c6ace68-59c9-4515-b8b4-8fffb1111488_300x.jpg?v=1607096206"></Logo>
            <Logo src="https://cdn.shopify.com/s/files/1/0053/2792/files/chansen.logo_300x.jpg?v=1494428392"></Logo>
            <Logo src="https://cdn.shopify.com/s/files/1/0053/2792/files/muuto.1.logo_300x.jpg?v=1497432126"></Logo>
            <Logo src="https://cdn.shopify.com/s/files/1/0053/2792/files/string.logo1_300x.jpg?v=1494429103"></Logo>
            <Logo src="https://cdn.shopify.com/s/files/1/0053/2792/files/Haus.Flos.Logo.300x250._8c6ace68-59c9-4515-b8b4-8fffb1111488_300x.jpg?v=1607096206"></Logo>
          </div>

          <div>
          <Fotterupper bg="peru">
              <H1 font="40px">Trade Sale</H1>
              <H1 font="25px">For Architech Designer And Specifier</H1>
            </Fotterupper>
          </div>
       </div>

    </div>
  )
}

export default Home