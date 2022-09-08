import React, { useState } from 'react'
import TodoInput from './TodoInput'
import { nanoid } from 'nanoid';
import TodoAitem from './TodoAitem';
function TodoA() {
 
    const[ntodo,setnodo]= useState([]);
    const[loading,setLoading]= useState(true);
    const[error,setError]= useState(false);
    const[page,setPage]= useState(0);

    React.useEffect(()=>{
       getTodo()
    },[])

    const getTodo= async (page)=>{
      fetch(`http://json-server-mocker-masai.herokuapp.com/tasks`)
      .then((res)=>res.json())
      .then((res)=>{
        setnodo(res)
      })
      .catch((er)=>{
        setError(true)
      })
      .finally(()=>{
        setLoading(false)
      })
    }
    const addTodo= async (title)=>{
        let todoObj={
            title,
            id: nanoid(),
            status:false
        }
        let reqop={
          method:'POST',
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify(todoObj)
        }
        try{
          let d= await fetch("http://json-server-mocker-masai.herokuapp.com/tasks",reqop )
          let ad= await d.json();
          getTodo()
        }catch{
          setError(false)
        }finally{
          setLoading(false)
        }
    }
   
  return loading?<h1>Loading</h1>:(

  
    <div>
     
    <TodoInput addTodo={addTodo}/>
    
    {ntodo.map((el)=>(
          <TodoAitem key={el.id} {...el}/>
    ))}
    <h3>Page:{page}</h3>
    <button onClick={()=>setPage(page+1)}>Next</button>

    </div>
  )
}

export default TodoA

