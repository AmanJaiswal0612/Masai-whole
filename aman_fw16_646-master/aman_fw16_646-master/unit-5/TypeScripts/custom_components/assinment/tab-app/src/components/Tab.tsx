import React, { useRef } from 'react'
import "../App.css"


type TheadProps={
 val:string[],
 valD:any[]
}

const Tab = ({val,valD}:TheadProps) => {

const headRef=useRef<HTMLDivElement[]>([])
const valueRef=useRef<HTMLDivElement[]>([])

  return (
     <>
      <div className='tab'>
         {val.map((el:string,index:number)=>{
             return<div key={index} 
             ref={(element)=>{
                 if(element&&headRef.current){
                   headRef.current[index]=element;
                 }
             }}
             onClick={()=>{
                 for(let i=0;i<valD.length;i++){
                     if(i===index){
                        valueRef.current[i].style.display="block"
                     }else{
                         valueRef.current[i].style.display="none"
                     }
                 }
                 
             }}
             >{el}</div>
         })}
      </div>
      <div className='pannel'>
         {valD.map((el:string,index:number)=>{
             return <div 
             ref={(element)=>{
                 if(element&&valueRef.current){
                     valueRef.current[index]=element;
                 }
             }}
             key={index}>
                {el}
             </div>
         })}
      </div>
     </> 
  
    
  )
}

export default Tab