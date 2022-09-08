export const GET_TODO_LOADING= "GET_TODO_LOADING";
export const GET_TODO_SUCCESS= "GET_TODO_SUCCESS";
export const GET_TODO_ERROR= "GET_TODO_ERROR";


export const getTodoLoading= ()=>{
    return{
        type: GET_TODO_LOADING
    }
}

export const getTodoError= ()=>{
    return{
        type: GET_TODO_ERROR
    }
}


export const getTodosuccess= (payload)=>{
    return{
        type: GET_TODO_SUCCESS,
        payload
    }
}


export const getTododata= () => (dispatch) =>{
    dispatch(getTodoLoading());
    fetch(`http://localhost:3003/todos`)
    .then((res)=>res.json())
    .then((res)=>dispatch(getTodosuccess(res)))
    .catch(()=>dispatch(getTodoError()));
}


export const deleteTododata= (id) => (dispatch) =>{
    fetch(`http://localhost:3003/todos/${id}`,{
        method:"DELETE",
        headers: {'Content-type': 'application/json'}
    }).then(()=>dispatch(getTododata()))
    
}

export const editTodo= (payload) => (dispatch) =>{
    fetch(`http://localhost:3003/todos/${payload.id}`,{
        method:"PATCH",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(payload)
    })
    .then(()=>dispatch(getTododata()));
}