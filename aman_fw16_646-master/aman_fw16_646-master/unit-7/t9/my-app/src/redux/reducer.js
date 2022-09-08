import { SETLOGIN, SETLOGOUT, SETUSER } from "./action"


const initialState = {
    login:false,
    user:{}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SETLOGIN:
    return { ...state, login:true}

  case SETLOGOUT:
    return {...state, login:false,user:{}}
  case SETUSER:
    return {...state, user:payload}
  default:
    return state
  }
}
