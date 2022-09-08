import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Nav } from "./components/Nav";
import { Todo } from "./components/Todo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path={"/"} element={<Todo />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/logout"} element={<Logout/>}/>
      </Routes>
    </div>
  );
}
