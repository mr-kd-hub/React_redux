const { combineReducers } = require("redux");
const { default: counterReducer } = require("./counterState");

const rootReducer = combineReducers({ counterReducer });
export default rootReducer;
