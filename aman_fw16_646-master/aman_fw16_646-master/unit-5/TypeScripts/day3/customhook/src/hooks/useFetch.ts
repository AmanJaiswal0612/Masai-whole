import axios from "axios";
import { useEffect, useState } from "react"


export const useFetch= <T>(url:string,per_page?:number,q?:string)=>{
const[loading,setLoading]=useState<boolean>(false);
const[error,setError]=useState<boolean>(false);
const[data,setData]=useState<T[]>([])

useEffect(()=>{
    setLoading(true) 
 axios.get(url,{
     params:{
         per_page:per_page,
         q:q
     }
 })
 .then(({data})=>{
    setLoading(false)
    if(data.items){ 
    setData(data.items);
    }else{
        setData([...data])
    }
 })
 .catch(()=>setError(true))
},[q])

return{
    loading,data,error
}

}