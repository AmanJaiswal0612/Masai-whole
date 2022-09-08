export const SETLOGIN= "SETLOGIN";
export const SETLOGOUT= "SETLOGOUT";
export const SETUSER= "SETUSER";
export const ADDPATIENT= "ADDPATIENT"

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

export const addPatient= (payload)=>{
    return {
        type:ADDPATIENT,
        payload
    }
}


