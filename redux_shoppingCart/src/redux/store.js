import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    uiReducer: uiSlice,
    cartReducer: cartSlice,
  },
});
export default store;
