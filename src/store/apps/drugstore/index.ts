//** Redux Imports */
import { Dispatch } from 'redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { drugstoreURL } from 'src/configs/appURL';

export const fetchDrugStore = createAsyncThunk("drugstore/getAllDrugstore",
async () => {
    const res = await axios.get(drugstoreURL);
    //const data = await res.json();

    return res.data.data;
})

const initialState = {
    data: [],
    loading: false,
}

export const appDrugstoreSlice = createSlice({
    name: 'appDrugstore',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDrugStore.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchDrugStore.pending, (state, action) => {
            state.loading = true;
        });
    },
})

export default appDrugstoreSlice.reducer