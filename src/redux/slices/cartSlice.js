import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartp: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      //console.log(action.payload);
      state.cartp = [...state.cartp, action.payload];
    },
    updateCart: (state, action) => {
      state.cartp = action.payload;
    }
  },
});

export const { addCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
