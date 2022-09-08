
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
 const [count,setCount]= useState(0);

  return (
    <div className={styles.container}>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)} >ADD</button>
      <button onClick={()=>setCount(count-1)}>MINUS</button>
    </div>
  )
}
