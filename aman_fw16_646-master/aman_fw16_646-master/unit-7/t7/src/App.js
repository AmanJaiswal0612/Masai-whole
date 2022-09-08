import logo from './logo.svg';
import './App.css';
import MainRoute from './routes/MainRoute';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <MainRoute/>
    </div>
  );
}

export default App;
