// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'
import { getProduct, getProductByCategory } from './api'
export const productSlice = createSlice({
    name: 'product',
    initialState: {
      products: [],
      productDetail: {},
      message:''
    
     
    },
    reducers: {},
    extraReducers: {
      [getProductByCategory.fulfilled]: (state, action) => {
          state.products = action.payload.data
          state.message = action.payload.message
         
          },
      [getProduct.fulfilled]: (state, action) => {
        console.log(action.payload)
        state.productDetail = action.payload.data
      }
  }
  })
  
  export default productSlice.reducer