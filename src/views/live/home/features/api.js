// ** Axios Imports
import { createAsyncThunk } from "@reduxjs/toolkit";
import createAxiosInstance from "@configs/axiosConfig";

const axios = createAxiosInstance();

export const getHomeData = createAsyncThunk("home/getHomeData", async () => {
  const response = await axios.get("home");
  const data = await response.data;
  return data;
});
