import React, { ChangeEvent, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { useDebouncedCallback } from '@react-hookz/web';

type User={
id?:number;
login?:string;
avatar_url?:string
}
const GithubSearch = () => {


 const[search,setSearch]=useState<string>("")
 let url: string = "https://api.github.com/search/users";
 const{loading,data,error}= useFetch<User>(url,5,search||"masai")
 const onChangeDebounce= useDebouncedCallback((e)=>setSearch(e.target.value),[],1000,0)

 
  return (
    <div>
      <input type="text"  onChange={onChangeDebounce} />
        {loading?(<h1>loading...</h1>):error?(<h1>error...</h1>):data.map((el)=>{
            return(
                <div key={el.id}>
                    <h1>{el.login}</h1>
                    <img src={el.avatar_url} alt="" />
                </div>
            )
        })}
    </div>
  )
}

export default GithubSearch