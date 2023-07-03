//** Redux Imports */
import { Dispatch } from 'redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { chwProfileURL } from 'src/configs/appURL';

export const fetchChwprofile = createAsyncThunk("chwprofile/getAllChwprofile",
async () => {
    const {data} = await axios.get(chwProfileURL);
    //const data = await res.json();
    //console.log(data);

    return data.data;
})

const initialState = {
    data: [],
    loading: false,
}

export const appChwProfileSlice = createSlice({
    name: 'appChwProfile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchChwprofile.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchChwprofile.pending,(state, action) => {
            state.loading = true;
        });
    },
})

export default appChwProfileSlice.reducer