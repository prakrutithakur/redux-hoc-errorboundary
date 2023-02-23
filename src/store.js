import { configureStore } from "@reduxjs/toolkit";
import allReducer from "./reducers";

const store = configureStore({ reducer: allReducer })
export default store;