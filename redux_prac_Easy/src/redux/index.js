import { createStore } from "redux";

//get reducer
import rootReducer from "./reducer";

//create store
const store = createStore(rootReducer);

export default store;
