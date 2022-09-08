
import './App.css';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"

import Cart from './pages/Cart'
import Login from './pages/Login'
import About from './pages/About';
import SideBar from './pages/SideBar';
import Fotter from './components/Fotter';
import Contact from './pages/Contact';
import NewArrival from './pages/NewArrival';
import Furniture from './pages/Furniture';
import SingleProduct from './pages/SingleProduct';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Singup from './pages/Singup';

function App() {
  const{isLogin}= useContext(AuthContext);
  return (
    <div className="App">
      <div className='main'>
        <SideBar/>
        <div>
           <Navbar/>
           <Routes>
             <Route path="/" element={<Home/>} ></Route>
             <Route path="/login" element={<Login/>}/>
             <Route path="/cart" element={isLogin?<Cart/>:<Navigate to="/login"/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path="/arrival"element={<NewArrival/>}/>
             <Route path="/furnitures" element={<Furniture/>}/>
             <Route path="*" element={<h1>Error 404 !!! <br/> Content Not Found</h1>}/>
             <Route path="/product" element={<SingleProduct/>}/>
             <Route path="/signup" element={<Singup/>}/>
           </Routes>
           <Fotter/>
         </div>
      </div>
        
    </div>
  );
}

export default App;
