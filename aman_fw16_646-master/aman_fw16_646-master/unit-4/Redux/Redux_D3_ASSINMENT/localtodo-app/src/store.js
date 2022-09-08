import { combineReducers, legacy_createStore } from "redux";
import { areducer } from "./authreducer/areducer";
import { reducer } from "./todoreducer/reducer";

const rootReducer = combineReducers({
  auth: areducer,
  app: reducer
});

export const store = legacy_createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
