
import './App.css'
import {OtpInput} from "./components/OtpInput"
import { accdata } from './accdata'
import Accodian from './components/Accodian'

export default function App() {
  const handleChange= (otp:string)=>{
    console.log(otp)
  }


   
  return (
    <div className="App">
       <OtpInput onChange={handleChange} length={4} />
       <Accodian data={accdata}/>

    </div>
  );
}
