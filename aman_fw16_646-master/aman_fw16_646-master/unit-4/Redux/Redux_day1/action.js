export const incrementCount = () => {
    return { type: "INCREMENT" };
  };
  
  export const decrementCount = () => {
    return { type: "DECREMENT" };
  };
  
  export const multiplyCount = (payload) => {
    return { type: "MULTIPLY", payload };
  };
  
  export const byincrementCount = (payload) => {
    return { type: "BYINCREMENT", payload };
  };
  
  export const divideCount = (payload) => {
    return { type: "DIVIDE", payload };
  };
  
  export const substractCount = (payload) => {
    return { type: "SUBSTRACT", payload };
  };
  