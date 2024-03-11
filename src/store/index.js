import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../reducer/reducer";

export default configureStore(counterSlice);
