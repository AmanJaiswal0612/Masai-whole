

export const TodoItem=({name,id,remove})=>{
    
    return (
        <>
        <h1>{name}</h1>
        <button onClick={()=>remove(id)}>Delete</button>
        </>
    )
}