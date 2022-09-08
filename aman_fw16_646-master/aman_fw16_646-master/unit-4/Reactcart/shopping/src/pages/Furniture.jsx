import React from 'react'
import { Image } from '../components/AboutDetail.styled';
import { furnitureData } from '../Data'
import styles from"./Home.module.css"
import Productslider from './Productslider';
const Furniture = () => {
    const data= furnitureData;
  return (
    <div>
    
        <div className={styles.arrivaltop}>
            <div>
              <Image src="https://hausimg.imgix.net/s/files/1/0053/2792/collections/haus-london-brand-product.jpg?v=1635936724&w=1024&"/>
            </div>
            <div style={{padding:"30px"}}>
                <h3>Furniture</h3>
                 <p>We sell a wide range of design classics and contemporary furniture from authentic designer brands such as HAY, &tradition, Vitra, Menu, String, Carl Hansen & Son, De La Espada, Muuto, Ferm Living, Gubi, Fredericia, Fritz Hansen and more.</p>
                 <p>Whether you're looking for iconic statement lounge chairs, comfy sofas, dining chairs and tables, desks, storage solutions, stools, coffee tables or beds; we have you covered. We also offer a wide range of durable designer outdoor furniture too.  </p>
                 <p>Browse our full collection to find the furniture that will help you curate your perfect, forever home.</p>
            </div>
        </div>

        <div>
            <Productslider data={data}/>
        </div>
    </div>
  )
}

export default Furniture