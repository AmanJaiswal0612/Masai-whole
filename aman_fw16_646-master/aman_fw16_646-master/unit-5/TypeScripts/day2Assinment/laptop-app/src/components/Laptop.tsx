import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import DisplayLaptop from './DisplayLaptop';
import {nanoid} from "nanoid";
import Form from './Form';

export type LaptopData= {
    id?:number;
    model?:string;
    year?:string;
    os?:string;
    sheight?:number;
    swidth?:number;
    price?:number;
}


const Laptop = () => {
const[ldata,setLdata]= useState<LaptopData[]>([])
const[store,setStore]= useState<LaptopData[]>([])
useEffect(()=>{
getData()
},[])

const getData=()=>{
    axios.get("http://localhost:8080/laptops")
    .then((res:AxiosResponse<LaptopData[]>)=>{
        let data=res.data;
        setLdata(data)
        setStore(data)
    })
    
}

const handlePricefilter =():void=>{
  let ndata= store.filter((el:LaptopData)=>{
     return el.price==undefined?el:el.price<50000
  })
  setLdata(ndata)

}
const handlePriceSort=():void=>{
    let ndata:LaptopData[]= store.sort((a:LaptopData,b:LaptopData)=>{
      if(a.price==undefined||b.price===undefined){
          return 0;
      }else{
         return a.price-b.price
      }
    })
    setLdata(ndata)
}
const handleSortByh=():void=>{
    let ndata:LaptopData[]= store.sort((a:LaptopData,b:LaptopData)=>{
      if(a.sheight==undefined||b.sheight===undefined){
          return 0;
      }else{
         return a.sheight-b.sheight
      }
    })
    setLdata([...ndata])
}
const handleSortByw=():void=>{
    let ndata:LaptopData[]= store.sort((a:LaptopData,b:LaptopData)=>{
      if(a.swidth==undefined||b.swidth===undefined){
          return 0;
      }else{
         return a.swidth-b.swidth
      }
    })
    
    setLdata([...ndata])
}

const handleScreenFilter= ():void=>{
    let ndata= store.filter((el)=>{
        if(el.sheight==undefined||el.swidth==undefined){
            return el;
        }else{
            return el.sheight>650&&el.swidth>1200
        }
    })
    
    setLdata(ndata)
}


  return (
    <div>
      <div>
         <Form getData={getData} />
      </div>  
      <div>
       <table>
          <thead>
            <tr>
              <th>Id </th>
              <th>Model</th>
              <th>Make Year</th>
              <th>Operating System</th>
              <th>Screen height</th>
              <th>Screen width</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {ldata.map((el)=>(
             <DisplayLaptop key={nanoid()} {...el}/>
           ))} 
          </tbody>
       </table>
      </div>
      <button onClick={handlePricefilter} >Price&gt;50000</button>
      <button onClick={handlePriceSort}>Sort By Price</button>
      <button onClick={handleSortByh} >Sort By ScreenHeight</button>
      <button onClick={handleSortByw}>Sort By ScreenWidth</button>
      <button onClick={handleScreenFilter}>Filter By screen size(&gt;650&&&gt;1200)</button>
    </div>
  )
}

export default Laptop


