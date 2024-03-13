import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { counterSlice, cartSlice } from "../reducer/reducer";

export default configureStore({
  reducer: combineReducers({
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
  }),
});
