//** Redux Imports */
import { Dispatch } from 'redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { rduampurURL } from 'src/configs/appURL';

export const fetchRDUAmpur = createAsyncThunk("rduampur/getAllRDUAmpur",
async () => {
    const res = await axios.get(rduampurURL);
    //const data = await res.json();

    return res.data;
})

const initialState = {
    data: [],
    loading: false,
}

export const appRDUAmpurSlice = createSlice({
    name: 'appRDUAmpur',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRDUAmpur.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchRDUAmpur.pending, (state, action) => {
            state.loading = true;
        });
    },
})

export default appRDUAmpurSlice.reducer