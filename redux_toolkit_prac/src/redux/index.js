import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import counterSlice from "./reducer/counterState";
import authSlice from "./reducer/authReducer";

//create store
const store = configureStore({
  reducer: { counterReducer: counterSlice, authReducer: authSlice },
});

export default store;
