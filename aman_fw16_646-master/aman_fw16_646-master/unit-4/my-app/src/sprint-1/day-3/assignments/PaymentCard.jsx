import { DateLogo } from "./DateLogo";
import { Product } from "./Product.jsx";
import styles from "./PaymentCard.module.css"

const PaymentCard= (props)=>{
const {product,pay,color,date,logo,gift}= props;

return(
    <>
    <div className={styles.main} style={{background:`${color}`}}>
        <DateLogo date={date} logo={logo}/>
        <h2 className={styles.case}>Case study</h2>
        <h1>{gift}</h1>
        <h1>{pay}</h1>
        <Product  product={product}/>
    </div>
    </>
)

}

export {PaymentCard}