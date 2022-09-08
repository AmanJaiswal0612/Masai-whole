import './Tictac.css'
import Box from './Box'
import { useState } from 'react'

export const Tictac= ()=>{
let initialState=["","","","","","","","",""]
const[state,setState]= useState(initialState);
const[term,setterm]= useState(false)

const[winner,setWinner]= useState(0)

const gameChance = (index)=>{
 let newArr=[...state];
 if(!term){
     newArr[index]="X"
 }else{
     newArr[index]="O"
 }
 setterm(!term);
 setState(newArr)
 if(newArr[0]=="X"&&newArr[1]=="X"&&newArr[2]=="X"||
 newArr[0]=="X"&&newArr[3]=="X"&&newArr[6]=="X"||
 newArr[3]=="X"&&newArr[4]=="X"&&newArr[5]=="X"||
 newArr[6]=="X"&&newArr[7]=="X"&&newArr[8]=="X"||
 newArr[0]=="X"&&newArr[4]=="X"&&newArr[8]=="X"||
 newArr[2]=="X"&&newArr[4]=="X"&&newArr[6]=="X"||
 newArr[2]=="X"&&newArr[5]=="X"&&newArr[8]=="X"||
 newArr[1]=="X"&&newArr[4]=="X"&&newArr[7]=="X"){
     setWinner("The Winner is: Palyer A")
     setState(initialState)
 }
 if(newArr[0]=="O"&&newArr[1]=="O"&&newArr[2]=="O"||
 newArr[0]=="O"&&newArr[3]=="O"&&newArr[6]=="O"||
 newArr[3]=="O"&&newArr[4]=="O"&&newArr[5]=="O"||
 newArr[6]=="O"&&newArr[7]=="O"&&newArr[8]=="O"||
 newArr[0]=="O"&&newArr[4]=="O"&&newArr[8]=="O"||
 newArr[2]=="O"&&newArr[4]=="O"&&newArr[6]=="O"||
 newArr[2]=="O"&&newArr[5]=="O"&&newArr[8]=="O"||
 newArr[1]=="O"&&newArr[4]=="O"&&newArr[7]=="O"){
     setWinner("The Winner is: Palyer B")
     setState(initialState)
 }
 let count=0
 for(let i=0;i<newArr.length;i++){
   if(newArr[i]==""){
       count++;
   }
 }
 if(count==0){
     setWinner("Match Tied")
     setState(initialState)
 }
}


    return(
        <div className='board'>
            <h1 className='winner'>TicToe Game</h1>
        { !winner?
        <div className="ticmain">
           <Box value={state[0]} onClick={()=>gameChance(0)}/>
           <Box value={state[1]} onClick={()=>gameChance(1)}/>
           <Box value={state[2]} onClick={()=>gameChance(2)}/>
           <Box value={state[3]} onClick={()=>gameChance(3)}/>
           <Box value={state[4]} onClick={()=>gameChance(4)}/>
           <Box value={state[5]} onClick={()=>gameChance(5)}/>
           <Box value={state[6]} onClick={()=>gameChance(6)}/>
           <Box value={state[7]} onClick={()=>gameChance(7)}/>
           <Box value={state[8]} onClick={()=>gameChance(8)}/>
        </div> :<h1 className='winner'>{winner}</h1>
         }
        { !winner?<button className='refress' onClick={()=>setState(initialState)}>Refresh Game</button>:null}
        { winner?<button className='playagain' onClick={()=>setWinner(false)}>Play Again</button>:null}
        
        </div>

    )
}