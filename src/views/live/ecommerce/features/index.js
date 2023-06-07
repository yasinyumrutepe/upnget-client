// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
import { addBidRedux, getProduct, getProductByCategory } from "./api";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    productBids: [],
    productDetail: {},
    message: "",
  },
  reducers: {},

  extraReducers: {
    [getProductByCategory.fulfilled]: (state, action) => {
      state.products = action.payload.data;
      state.message = action.payload.message;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.productDetail = action.payload.data;
      state.productBids = action.payload.data.bids;
    },
    [addBidRedux.fulfilled]: (state, action) => {
      console.log(action);
    },
  },
});

export default productSlice.reducer;
