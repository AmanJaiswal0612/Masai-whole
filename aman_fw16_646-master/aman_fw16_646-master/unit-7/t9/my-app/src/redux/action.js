export const SETLOGIN= "SETLOGIN";
export const SETLOGOUT= "SETLOGOUT";
export const SETUSER= "SETUSER";


export const loginUser= (payload)=>{
    return{
        type:SETLOGIN,
    }
}

export const logoutUser= (payload)=>{
    return{
        type:SETLOGOUT
    }
}

export const setUser= (payload)=>{
    return{
        type:SETUSER,
        payload
    }
}