import Link from "next/link"

const Elements = ({name,username,email,id}) => {
  return (
    <Link  href={`/users/${id}`} >
    <div style={{border:"5px solid black"}} >
       <h1>Name: {name}</h1>
      
    </div>
    </Link>
  
  )
}

export default Elements