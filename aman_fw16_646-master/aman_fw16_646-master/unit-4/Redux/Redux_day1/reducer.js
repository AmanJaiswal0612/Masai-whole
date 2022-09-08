export const reducer = (state, action) => {
    let value = action.payload;
    value = Number(value);
    switch (action.type) {
      case "INCREMENT": {
        return {
          ...state,
          count: state.count++
        };
      }
      case "DECREMENT": {
        return {
          ...state,
          count: state.count--
        };
      }
  
      case "MULTIPLY": {
        return {
          ...state,
          count: (state.count = state.count * value)
        };
      }
      case "BYINCREMENT": {
        return {
          ...state,
          count: (state.count = state.count + value)
        };
      }
      case "DIVIDE": {
        return {
          ...state,
          count: (state.count = state.count / value)
        };
      }
      case "SUBSTRACT": {
        return {
          ...state,
          count: (state.count = state.count - value)
        };
      }
      default:
        return state;
    }
  };
  