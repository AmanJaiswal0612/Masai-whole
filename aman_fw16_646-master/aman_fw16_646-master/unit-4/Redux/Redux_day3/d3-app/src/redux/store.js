
import {combineReducers, legacy_createStore,applyMiddleware, compose} from "redux";
import { todoReducer } from "./todo/reducer";
import thunk from "redux-thunk"

const rootreducer = combineReducers({todos:todoReducer});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(thunk)
        // other store enhancers if any
      );

export const store = legacy_createStore(
    rootreducer,
    enhancer
)
