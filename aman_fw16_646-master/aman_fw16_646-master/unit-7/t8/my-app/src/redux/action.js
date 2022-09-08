export const SETLOGIN= "SETLOGIN";
export const SETLOGOUT= "SETLOGOUT"
export const ADDEMPLOYES= "ADDEMPLOYES"


export const loginUser= (payload)=>{
    return{
        type:SETLOGIN,
        payload
    }
}

export const logoutUser= (payload)=>{
    return{
        type:SETLOGOUT
    }
}

export const addEmployees= (payload)=>{
   return{
    type:ADDEMPLOYES,
    payload
   }
}