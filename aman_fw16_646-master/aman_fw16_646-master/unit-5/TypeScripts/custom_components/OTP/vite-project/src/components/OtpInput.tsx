import React, { ChangeEvent, SyntheticEvent, useRef, useState } from "react"

type OtpProp={
  length:number;
  onChange: (otp:string)=>void
}

export const OtpInput= ({length,onChange}:OtpProp)=>{
const inputRef= useRef<HTMLInputElement[]>([])
const [otp,setOtp]=useState<string>("")
const style:any={
  width:60,
  height:60,
  textAlign:"center",
  margin:10
}

const handlePaste= (e:any)=>{
  e.preventDefault()
const text=e.clipboardData.getData("Text")
if(text.length===length){
  setOtp(text);
  for(let i=0;i<text.length;i++){
    inputRef.current[i].value=text[i]
  }
  inputRef.current[text.length-1].focus()
}
}

return (
  <div onPaste={handlePaste} >
     {new Array(length).fill(1).map((el,index)=>{
       return <input  
       onChange={(e)=>{
          setOtp(otp+e.target.value);
       }}

       onKeyUp={(e)=>{
         if(e.code==="Backspace"){
          let str= otp.slice(0,index);
          if(index===1){
           str=""
           }
           if(index>0){
             inputRef.current[index-1].focus();
             //bacspace statechange function
             setOtp(str)
           }
         }else{
          if(index<length-1){
            inputRef.current[index+1].focus()
            }
           onChange(otp);
         }

        
       }}
       ref= {(element)=>{
         if(inputRef.current && element){
           inputRef.current[index]=element;
         }
       }}
       style={style}
        type="text" maxLength={1} key={index}/>
     })}
  </div>
)


}