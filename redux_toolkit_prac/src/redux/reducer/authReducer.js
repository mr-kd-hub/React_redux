import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: { isLogedin: false },
  reducers: {
    login(state, action) {
      state.isLogedin = action.payload;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
