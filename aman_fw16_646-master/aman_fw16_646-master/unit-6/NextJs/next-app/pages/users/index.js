

const Users = ({users}) => {
  return (
    <div>
      {users.map((el,index)=>{
        return(
            <h1 key={index} >{el.id}-{el.name}</h1>
        )
      })}

    </div>
  )
}

export default Users

export const getServerSideProps= async()=>{

const data= await fetch("https://jsonplaceholder.typicode.com/users").then((x)=>x.json())

return{
    props:{users:data}
}
}


