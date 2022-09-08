import { ADDTOOD, DELETE_TODO, GET_TODOS, SINGLE_TODO, TOGGLE_STATUS } from "./actionType";



export const reducer= (state,{type,payload})=>{

  switch(type){
    case ADDTOOD:{
      return{
        ...state,
         todos:[...state.todos,payload]
      }
    }
    case GET_TODOS:{
      return{
        ...state,todos:payload
      }
    }
    case DELETE_TODO:{
      return{
        ...state,todos:state.todos.filter((el)=>{
          return el.id!==payload
        })
      }
    }
    case TOGGLE_STATUS:{
      for(let i=0;i<state.todos.length;i++){
        if(state.todos[i].id===payload){
        //  state.todos[i].status=!state.todos[i].state;
         if(state.todos[i].status===true){
           state.todos[i].status=false
         }else{
          state.todos[i].status=true
         }
        }
      }
      return{
        ...state,todos:[...state.todos]
      }
    }
    default: return state;
  }
}