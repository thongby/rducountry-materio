//** Redux Imports */
import { Dispatch } from 'redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { rdugroceryURL } from 'src/configs/appURL';

export const fetchRDUGrocery = createAsyncThunk("rdugrocery/getAllRDUGrocery",
async () => {
    const res = await axios.get(rdugroceryURL);
    //const data = await res.json();

    return res.data.data;
})

const initialState = {
    data: [],
    loading: false,
}

export const appGrocerySlice = createSlice({
    name: 'appGrocery',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRDUGrocery.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchRDUGrocery.pending, (state, action) => {
            state.loading = true;
        });
    },
})

export default appGrocerySlice.reducer