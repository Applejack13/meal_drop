import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../allPages";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
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

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      console.log(id, quantity);
      const product = Products.find((p) => p.id === id);

      if (!product) {
        console.error("Product not found");
        return;
      }

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ ...product, quantity });
      }
    },
    // removeFromCart: (state, action) => {
    //   const id = action.payload;
    //   state.cartItems = state.cartItems.filter((item) => item.id !== id);
    // },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { addToCart } = cartSlice.actions;
