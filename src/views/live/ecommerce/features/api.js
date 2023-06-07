// ** Axios Imports
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductByCategory = createAsyncThunk(
  "product/getProductByCategory",
  async (category) => {
    const response = await axios.get(
      `http://localhost:8000/api/product/category/${category}`
    );
    const data = await response.data;
    return data;
  }
);

export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  const response = await axios.get(`http://localhost:8000/api/product/${id}`);
  const data = await response.data;
  return data;
});

export const addBidRedux = createAsyncThunk("product/addBid", async (data) => {
  const response = await axios.post("http://localhost:8000/api/bid", data);
  const bid = await response.data;
  return bid;
});
