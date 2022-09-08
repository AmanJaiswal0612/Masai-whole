import { useEffect, useState } from "react"


export const useTimeout= (delay:number)=>{

const[ready,setready]=useState<boolean>(false)

useEffect(()=>{
 let id= setTimeout(()=>{
   setready(true);
 },delay*1000)
},[])

return{
    ready
}
}