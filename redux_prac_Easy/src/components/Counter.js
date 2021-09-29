import classes from "./Counter.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

//import counterReducer from "../redux/reducer/counterState";

const Counter = () => {
  const [toggle, setToggle] = useState(false);
  const toggleCounterHandler = () => {
    dipatch({ type: "reset" });
    setToggle(!toggle);
  };
  const state = useSelector((state) => state.counterReducer);
  const dipatch = useDispatch();
  return (
    <>
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {toggle && <div className={classes.value}> {state.counter}</div>}
        <div>
          <button
            onClick={() => {
              dipatch({ type: "inc", payload: 1 });
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              dipatch({ type: "desc", payload: 1 });
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              dipatch({ type: "reset" });
            }}
          >
            Reset
          </button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    </>
  );
};

export default Counter;
