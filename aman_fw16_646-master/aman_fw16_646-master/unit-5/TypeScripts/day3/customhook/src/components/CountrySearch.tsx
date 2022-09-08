import { useDebouncedCallback } from '@react-hookz/web';
import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

type Count={
    country:string;
    city:string
}

const CountrySearch = () => {
 const [csearch,setCsearch]= useState("");
 const {data}= useFetch<Count>("http://localhost:8080/country",1,csearch)

 const[fdata,setFdata]= useState<Count[]>([]);

 useEffect(()=>{
  setFdata(data)
 },[data])

 const onChangeDebounce= useDebouncedCallback((e)=>{
   setCsearch(e.target.value.toLowerCase());
   let ndata=data.filter((el)=>{
     return el.country.toLowerCase().includes(csearch)
   })
   setFdata(ndata);
 },[],1000,0)

 
 

  return (
    <div>
      <input onChange={onChangeDebounce} type="text"  placeholder="Search Country"/>
     
      <div>
        {fdata.map((el)=>{
          return<div>
              <h1>{el.country}</h1>
              <h2>{el.city}</h2>
          </div>
        })}
      </div>
    </div>
  )
}

export default CountrySearch