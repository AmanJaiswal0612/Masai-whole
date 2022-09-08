import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const login = useSelector((state) => state.auth.isAuth);
  if (login === false) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
};
