import { useState } from "react";

type Fdata={
    email:string;
    username:string;
    password:string
}
export function useMergeState<T>(initState:Fdata){

const{username,email,password}:Fdata=initState;
const [data,setData]=useState({username,email,password})

const setState=(name:string,value:string)=>{
    
    setData({...data,[name]:value})
}


    return{
        data,   
        setState
    }

}