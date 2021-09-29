import classes from "./Counter.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { counterActions } from "../redux/reducer/counterState";
import { authActions } from "../redux/reducer/authReducer";

//import counterReducer from "../redux/reducer/counterState";

const Counter = () => {
  const [toggle, setToggle] = useState(false);
  const counterState = useSelector((state) => state.counterReducer);
  const authState = useSelector((state) => state.authReducer);
  const dipatch = useDispatch();

  const toggleCounterHandler = () => {
    setToggle(!toggle);
    dipatch(counterActions.reset());
  };

  //console.log(`state`, authState.isLogedin);
  return (
    <>
      {authState.isLogedin && (
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          {toggle && (
            <div className={classes.value}> {counterState.counter} </div>
          )}
          <div>
            <button
              onClick={() => {
                dipatch(counterActions.increment({ num1: 1, num2: 2 }));
              }}
            >
              Increment
            </button>
            <button
              onClick={() => {
                dipatch(counterActions.decrement(1));
              }}
            >
              Decrement
            </button>
            <button
              onClick={() => {
                dipatch(counterActions.reset());
              }}
            >
              Reset
            </button>
          </div>
          <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
      )}
      {authState.isLogedin ? (
        <>
          <button
            onClick={() => {
              dipatch(authActions.login(false));
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              dipatch(authActions.login(true));
            }}
          >
            Login
          </button>
        </>
      )}
    </>
  );
};

export default Counter;
