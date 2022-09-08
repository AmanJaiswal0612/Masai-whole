import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const state = useSelector((state) => state.app.todos);

  return (
    <div>
      {state.map((el) => {
        return <h1 key={nanoid()}>{el.title}</h1>;
      })}
    </div>
  );
};
