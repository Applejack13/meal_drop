import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../allPages";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      if (state.value < 10) {
        state.value++;
      }
    },
    decrement: (state) => {
      if (state.value > 1) {
        state.value--;
      }
    },
    reset: (state) => {
      state.value = 1;
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
      const product = Products.find((p) => p.id === id);

      if (!product) {
        console.error("Product not found");
        return;
      }

      const existingItem = state.cartItems.find(
        (item) => item.product.id === id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ product, quantity });
      }

      state.sum = state.cartItems.reduce((acc, item) => {
        return acc + item.product.foodPrice * item.quantity;
      }, 0);
    },
    // removeFromCart: (state, action) => {
    //   const id = action.payload;
    //   state.cartItems = state.cartItems.filter((item) => item.id !== id);

    //   state.sum = state.cartItems.reduce((acc, item) => {
    //     const product = Products.find((p) => p.id === item.id);
    //     return acc + product.foodPrice * item.quantity;
    //   }, 0);
    // },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export const { addToCart } = cartSlice.actions;
