export const SETLOGIN= "SETLOGIN";
export const SETLOGOUT= "SETLOGOUT";
export const SETUSER= "SETUSER";
export const ADDTODO = "ADDTODO";

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


export const addTodo= (payload)=>{
    return {
        type:ADDTODO,
        payload
    }
}