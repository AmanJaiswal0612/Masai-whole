import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Login from './comp/Login';
import Signup from './comp/Signup';
import Otp from './comp/Otp';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<h1>welcome to home</h1>} />
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/otp" element={<Otp/>}/>
        </Routes>
    </div>
  );
}

export default App;
