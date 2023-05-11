//** Redux imports */
import { Dispatch } from 'redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//** Axios Importd */
import axios from 'axios';

interface DataParams {
    q: string,
    role: string,
    status: string,
    currentPlan: string
}

interface Redux {
    getState : any,
    dispatch : Dispatch<any>
}

//** Fetch Users */
export const fetchData = createAsyncThunk('appUsers/fetchData', async (params: DataParams) => {
    const response = await axios.get('', { params })

    return response.data
})

//** Add Users */ 

//** Delete Users */ 

export const appUsersSlice = createSlice({
    name: 'appUsers',
    initialState:{
        data: [],
        total: 1,
        params: {},
        allData: [],
    },
    reducers: {},
    extraReducers: (builder) => {
       //builder.addCase() 
    }
})

export default appUsersSlice.reducer 

