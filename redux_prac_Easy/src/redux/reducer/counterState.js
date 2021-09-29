const counterReducer = (state = { counter: 10 }, action) => {
  switch (action.type) {
    case "inc":
      return { counter: state.counter + action.payload };
    case "desc":
      return { counter: state.counter - action.payload };
    case "reset":
      return { counter: 0 };
  }
  return state;
};

export default counterReducer;
