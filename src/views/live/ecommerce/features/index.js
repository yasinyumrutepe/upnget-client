// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'
import { getProductByCategory } from './api'
export const productSlice = createSlice({
    name: 'product',
    initialState: {
      products_finished_today: [],
      products_start_today: [],
      brands: [],
      advertising: [],
     
    },
    reducers: {},
    extraReducers: {
      [getProductByCategory.fulfilled]: (state, action) => {
          state.products_finished_today = action.payload.data.products_finished_today
          state.products_start_today = action.payload.data.products_start_today
          state.brands = action.payload.data.brands
          state.advertising = action.payload.data.advertising
          },
      [getProductByCategory.rejected]: (state, action) => {
          console.log(action)
      }
  }
  })
  
  export default productSlice.reducer