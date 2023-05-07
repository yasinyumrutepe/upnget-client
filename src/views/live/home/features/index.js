// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'
import { getHomeData } from './api'
export const homeSlice = createSlice({
    name: 'home',
    initialState: {
      products_finished_today: [],
      products_start_today: [],
      brands: [],
      advertising: [],
     
    },
    reducers: {},
    extraReducers: {
      [getHomeData.fulfilled]: (state, action) => {
          state.products_finished_today = action.payload.data.products_finished_today
          state.products_start_today = action.payload.data.products_start_today
          state.brands = action.payload.data.brands
          state.advertising = action.payload.data.advertising
          },
      [getHomeData.rejected]: (state, action) => {
          console.log(action)
      }
  }
  })
  
  export default homeSlice.reducer