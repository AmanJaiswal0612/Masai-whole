import {useRouter} from "next/router"
const ProductDetails = () => {
    const {query}= useRouter();
  return (
    <div>ProductDetails of index {query.id}</div>
  )
}

export default ProductDetails