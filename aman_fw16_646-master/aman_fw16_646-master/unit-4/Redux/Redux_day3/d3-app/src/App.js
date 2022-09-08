import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1 style={{fontSize:"40px" ,background:"grey"}}>Todo App</h1>
      <Todo/>
    </div>
  );
}

export default App;
