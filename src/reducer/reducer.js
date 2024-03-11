import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
    id: "", //Am I need it here?
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// add food info to the store
