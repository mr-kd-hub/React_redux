const redux = require("redux");

//reducer method
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "inc":
      return { counter: state.counter + action.payload };
    case "desc":
      return { counter: state.counter - action.payload };
  }
  return state;
};

//store
const store = redux.createStore(counterReducer);

//subscriber
const counerSubscriber = () => {
  console.log(store.getState());
};
store.subscribe(counerSubscriber);

//action
store.dispatch({ type: "inc", payload: 10 });
store.dispatch({ type: "desc", payload: 10 });
