import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/Navbar';
import MainRoute from './routes/MainRoute';
import { useDispatch } from 'react-redux';
import { loginUser } from './redux/action';

function App() {
  let token=localStorage.getItem("token");
  const dispatch= useDispatch();
  if(token){
    dispatch(loginUser(token))
  }
  return (
    <div className="App">
       <ButtonAppBar/>
       <MainRoute/>
    </div>
  );
}

export default App;
