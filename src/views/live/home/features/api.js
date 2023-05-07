

// ** Axios Imports
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getHomeData =(
    createAsyncThunk(
    'home/getHomeData',
    async () => {
        const response = await axios.get('http://localhost:8000/api/home')
        const data = await response.data
        return data
    }
)
)   
    
   




