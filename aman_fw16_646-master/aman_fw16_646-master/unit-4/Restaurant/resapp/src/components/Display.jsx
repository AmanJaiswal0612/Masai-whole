import Resdisplay from "./Resdisplay"
import { nanoid } from "nanoid"

export const Display = ({data})=>{
 return(
     <>
     {data.map((el)=>{
         return <Resdisplay key={nanoid()} props={el}/>
     })}
     </>
 )
}