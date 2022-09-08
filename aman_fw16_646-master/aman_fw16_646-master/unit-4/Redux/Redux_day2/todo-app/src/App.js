
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Todo } from './component/Todo';
import TodoSingle from './component/TodoSingle';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={"/*"} element={<Todo/>}/>
          <Route path={":id"} element={<TodoSingle/>} />
        </Routes>
    </div>
  );
}

export default App;
