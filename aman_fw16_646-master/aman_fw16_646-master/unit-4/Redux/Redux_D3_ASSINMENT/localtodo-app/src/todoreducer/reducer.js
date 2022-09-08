import { loadData, saveData } from "../utils/localStorage";

let initialState = {
  todos: loadData("todos") || []
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO": {
      const upadatedTodo = [...state.todos, payload];
      saveData("todos", upadatedTodo);
      return {
        ...state,
        todos: upadatedTodo
      };
    }
    default:
      return state;
  }
};
