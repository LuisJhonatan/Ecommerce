import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartp: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cartp = [...state.cartp, action.payload];
    },
    updateCart: (state, action) => {
      state.cartp = action.payload;
    },
  },
});

export const { addCart, updateCart, changeCount } = cartSlice.actions;

export default cartSlice.reducer;
