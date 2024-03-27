import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { counterSlice, cartSlice, themeToggleSlice } from "../reducer/reducer";

export default configureStore({
  reducer: combineReducers({
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
    themeToggle: themeToggleSlice.reducer,
  }),
});
