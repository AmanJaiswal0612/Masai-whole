import React from 'react'
import { Card } from './Card';


type Element={title:string;desc:string}
type AccProptype={
    data:Element[];
}

const Accodian = ({data}:AccProptype) => {
    
  return (
    <div>
        {data.map((el,index)=>{
            return <Card key={index} />
        })}
    </div>
  )
}

export default Accodian