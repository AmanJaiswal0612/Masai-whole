import { loadData, saveData } from "../utils/localStorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType";

const initialState = {
  isAuth: loadData("login")||false,
  token: loadData("token")||""
};

export const areducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      saveData("login", payload.isAuth);
      saveData("token", payload.token);
      return {
        ...state,
        isAuth: true,
        token: payload.token
      };
    }
    case LOGIN_FAILURE: {
      return initialState
    }
    default:
      return state;
  }
};
