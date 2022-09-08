import axios from "axios";
import {useRouter} from "next/router"

const SingleItem = ({data}) => {
    
    console.log(data)
  return (
    <div>
       <h1>Name: {data.name}</h1>
       <h1>UserName: {data.username}</h1>
       <h1>Email: {data.email}</h1>
    </div>
  )
}

export default SingleItem




export async function getServerSideProps({params}) {
    
    
    // const {query}= useRouter();
    let {data}= await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    return {
      props: {data}, // will be passed to the page component as props
    }
  }