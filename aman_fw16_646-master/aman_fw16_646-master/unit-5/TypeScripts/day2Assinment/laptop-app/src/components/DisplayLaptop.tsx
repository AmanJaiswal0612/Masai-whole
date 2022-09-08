import React from 'react'
import {nanoid} from "nanoid"
import { LaptopData } from './Laptop'
const DisplayLaptop = ({id,model,os,price,sheight,swidth,year}:LaptopData) => {
  return (
    
       <tr>
           <td>{id}</td>
           <td>{model}</td>
           <td>{year}</td>
           <td>{os}</td>
           <td>{sheight}</td>
           <td>{swidth}</td>
           <td>{price}</td>
       </tr>

   
  )
}

export default DisplayLaptop