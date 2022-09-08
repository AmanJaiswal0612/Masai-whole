import { useState } from 'react'
import './App.css'
import Tab from './components/Tab'
import TabBox from './components/TabBox';

type TheadProps={
  val:string[];
} 

function App() {
  
  
  return (
    <div className="App">
        <TabBox/>
    </div>
  )
}

export default App
