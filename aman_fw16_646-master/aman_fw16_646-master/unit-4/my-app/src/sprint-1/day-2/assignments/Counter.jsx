import {useState} from 'react'
import styles from "./Counter.module.css"
const Counter=({no})=>{

    const[count,setCount]= useState(no)  
    const handlePlus=()=>{
        setCount(count+1);
    }
    const handleMinus=()=>{
        setCount(count-1);
    }
    const handleDouble=()=>{
        setCount(count*2);
    }
    return(
        <div className={styles.main}>
            <button className={styles.one} onClick={()=>handlePlus()}>PLUS</button>
            <button className= {styles.two} onClick={()=>handleMinus()}>MINUS</button>
            <button className={styles.three} onClick={()=>handleDouble()}>DOUBLE</button>
            <h1 className={styles.counter}>{count}</h1>
        </div>
    )
}

export {Counter}