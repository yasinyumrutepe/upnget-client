// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
import { getHomeData } from "./api";
export const homeSlice = createSlice({
  name: "home",
  initialState: {
    products: [],

    brands: [],
    advertising: [],
  },
  reducers: {},
  extraReducers: {
    [getHomeData.fulfilled]: (state, action) => {
      state.products = action.payload.data.products;
      state.brands = action.payload.data.brands;
      state.advertising = action.payload.data.advertising;
    },
    [getHomeData.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export default homeSlice.reducer;
