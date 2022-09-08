import React from 'react'
import { Image } from '../components/AboutDetail.styled'
import styles from "./Home.module.css"
import { homeData,homeData2,homeData3,arrivaldata } from '../Data'
import Productslider from './Productslider'
const NewArrival = () => {
    let data= [...homeData,...homeData2,...homeData3,...arrivaldata];
  return (
    <div>
        <div className={styles.arrivaltop}>
            <div>
              <Image src="https://hausimg.imgix.net/s/files/1/0053/2792/collections/haus-london-hay-quilton-sofa_0530e3c9-f069-48a7-8dcf-95862e49fc2a.jpg?v=1630426702&w=1024&"/>
            </div>
            <div style={{padding:"30px"}}>
                <h3>Arrivals</h3>
                 <p>Our curated edit of contemporary furniture, lighting and homewares is always expanding.</p>
                 <p>Browse the latest arrivals we’ve found for you, including brand new designs, bestsellers in new finishes, limited edition releases and newly reissued design classics. </p>
                 <p>Return regularly for the latest arrivals from HAY, &tradition, Menu, De La Espada, Muuto, Flos, Menu, Ferm Living and more. </p>
            </div>
        </div>

        <div>

            <Productslider data={data}/>
        </div>

    </div>
  )
}

export default NewArrival