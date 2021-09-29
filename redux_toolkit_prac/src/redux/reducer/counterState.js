import { createSlice } from "@reduxjs/toolkit";

//optios is redux tool kit
const counterSlice = createSlice({
  name: "counterSlice", //name of slice
  initialState: { counter: 0, isLogedin: false },
  reducers: {
    increment(state, action) {
      // /console.log(`action`, action);
      state.counter = state.counter + action.payload.num1 * action.payload.num2;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    reset(state) {
      state.counter = 0;
    },
    login(state, action) {
      state.isLogedin = action.payload;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
