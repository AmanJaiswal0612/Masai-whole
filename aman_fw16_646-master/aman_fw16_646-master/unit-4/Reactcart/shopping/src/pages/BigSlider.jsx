import React from 'react'
import styles from './Home.module.css'
const BigSlider = () => {
  return (
    <div className={styles.mainbslider}>
      <div>
            <img src="https://cdn.shopify.com/s/files/1/0053/2792/files/HAUS_NEWSLETTER_TEMPLATE-string2_1024x.jpg?v=1637161260" alt="" />
      </div>
      <div>
           <div>
               <img src="https://hausimg.imgix.net/s/files/1/0053/2792/products/string-cabinet-walnut-open-1600x1141_landscape_large_357aa1f5-9fe5-49ee-ab3a-5bfb9222c6b3_1024x1024.jpg?v=1644066321&auto=format&w=430&" alt="" />
           </div>
           <div>
               <img src="https://hausimg.imgix.net/s/files/1/0053/2792/products/string-tinycabinet-open-1600x1566_landscape_1024x1024.jpg?v=1644062904&auto=format&w=430&" alt="" />
           </div>
      </div>
      

    </div>
  )
}

export default BigSlider