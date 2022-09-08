import axios from "axios"
import Elements from "../../components/Elements"

const user = ({data}) => {
    
  return (
    <div>
       {data.map((el,index)=>{
           return <Elements key={index} {...el}/>
       })}

    </div>
  )
}

export default user

export async function getServerSideProps() {
    let {data}= await axios.get("https://jsonplaceholder.typicode.com/users");
   
    return {
      
    
      props: {data}, // will be passed to the page component as props
    }
  }