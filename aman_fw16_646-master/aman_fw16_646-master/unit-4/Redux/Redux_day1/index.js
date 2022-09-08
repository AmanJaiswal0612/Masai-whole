import {
    incrementCount,
    decrementCount,
    multiplyCount,
    divideCount,
    substractCount,
    byincrementCount
  } from "./action.js";
  import Store from "./store.js";
  import { reducer } from "./reducer.js";
  
  let userInput = document.querySelector("#userinput");
  
  const store = new Store(reducer, { count: 0 });
  
  let add = document.querySelector("#add");
  let minus = document.querySelector("#minus");
  let value = document.querySelector("#count");
  let plus = document.querySelector("#plus");
  let divide = document.querySelector("#divide");
  let substract = document.querySelector("#substract");
  let multiply = document.querySelector("#multiply");
  
  value.innerText = store.getState().count;
  
  add.addEventListener("click", () => {
    store.dispatch(incrementCount());
    value.innerText = store.getState().count;
  });
  
  minus.addEventListener("click", () => {
    store.dispatch(decrementCount());
    value.innerText = store.getState().count;
  });
  
  plus.addEventListener("click", () => {
    let userValue = Number(userInput.value);
    store.dispatch(byincrementCount(userValue));
    value.innerText = store.getState().count;
  });
  
  substract.addEventListener("click", () => {
    let userValue = Number(userInput.value);
    store.dispatch(substractCount(userValue));
    value.innerText = store.getState().count;
  });
  
  multiply.addEventListener("click", () => {
    let userValue = Number(userInput.value);
    store.dispatch(multiplyCount(userValue));
    value.innerText = store.getState().count;
  });
  
  divide.addEventListener("click", () => {
    let userValue = Number(userInput.value);
    store.dispatch(divideCount(userValue));
    value.innerText = store.getState().count;
  });
  