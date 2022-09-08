import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoreducer/action";

export const TodoInput = () => {
  const [instate, setInsate] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    let payload = {
      title: instate,
      id: nanoid(),
      status: false
    };
    const action = addTodo(payload);
    dispatch(action);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInsate(e.target.value)}
        value={instate}
        placeholders="Enter Todo "
      />
      <button onClick={handleAdd}> ADD Todo</button>
    </div>
  );
};
