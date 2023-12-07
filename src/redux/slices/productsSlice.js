import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product = [...state.product, action.payload];
    }
  },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
