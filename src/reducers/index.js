import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import counterReducer from "./counter";

const allReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer

});

export default allReducer;