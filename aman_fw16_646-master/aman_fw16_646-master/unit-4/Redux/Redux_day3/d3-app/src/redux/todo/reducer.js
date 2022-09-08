import { GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from "./action"


const initaialState= {
    loading:false,
    error:false,
    todos:[]
}

export const todoReducer= (state=initaialState,{type,payload})=>{
 switch(type){
     case GET_TODO_LOADING:{
         return{
             ...state,
             loading:true,
             error:false,
             todos:[]
           }
        }      
     case GET_TODO_SUCCESS:{
         return{
             ...state,
             loading:false,
             error:false,
             todos:payload
         }
      }
     case GET_TODO_ERROR:{
         return{
             ...state,
             loading:false,
             error:true,
             todos:[]
         }
     }
     default: return state
 }
}