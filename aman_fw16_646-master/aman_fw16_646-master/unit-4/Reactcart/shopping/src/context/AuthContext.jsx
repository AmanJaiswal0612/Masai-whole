import { createContext, useState } from "react";


export const AuthContext= createContext();



export const AuthProvider= ({children})=>{
   const[isLogin,setLogin]= useState(false);


   
    return(
    <AuthContext.Provider value={{isLogin,setLogin}}>
    {children}
    </AuthContext.Provider>
   )
}