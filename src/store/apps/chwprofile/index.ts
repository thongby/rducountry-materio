//** Redux Imports */
import { Dispatch } from 'redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { chwProfileURL } from 'src/configs/appURL';

export const fetchChwprofile = createAsyncThunk("chwprofile/getAllChwprofile",
async () => {
    const res = await axios.get(chwProfileURL);
    //const data = await res.json();

    return res.data;
})

const initialState = {
    data: [],
}

export const appChwProfileSlice = createSlice({
    name: 'appChwProfile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchChwprofile.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default appChwProfileSlice.reducer