import { ADDEMPLOYES, SETLOGIN, SETLOGOUT } from "./action"


const initialState = {
    login:false,
    token:null,
    employees:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SETLOGIN:
    return { ...state, login:true,token:payload}

  case SETLOGOUT:
    return {...state, login:false,token:""}

  case ADDEMPLOYES:
    return {...state,employees:payload}
  default:
    return state
  }
}
