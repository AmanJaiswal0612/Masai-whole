import { ADDPATIENT, ADDTODO, SETLOGIN, SETLOGOUT} from "./action"


const initialState = {
    login:false,
    userId:null,
    token:null,
    patient:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SETLOGIN:
    return { ...state, login:true,userid:payload.userId,token:payload.token}
  case SETLOGOUT:
    return {...state, login:false,user:null,token:null}
  case ADDPATIENT:
    return {...state, patient:payload}
  default:
    return state
  }
}


