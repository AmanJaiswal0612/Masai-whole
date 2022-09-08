import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState } from 'react';
import Btn from './components/Btn';
import Slider from './components/Slider';



function App() {

  const[theme,setTheme]=useState("light")
  const[count,setCount]=useState(0);

  return (
    <div className="App" data-testid="app">
     <h3>Theme is {theme}</h3>
     <Button onClick={()=>{
       setTheme(theme === "light"? "dark" : "light")
     }} >change theme</Button>
  
     <h1 data-testid="count">{count}</h1>
     <Btn onClick={()=>{
       setCount(count+5)
     }} >ADD</Btn>
     <Btn onClick={()=>{
       setCount(count-5)
     }} >REDUCE</Btn>
     

     <Slider />
    </div>
  );
}

export default App;
