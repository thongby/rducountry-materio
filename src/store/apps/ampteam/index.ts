//** Redux Imports */
import { Dispatch } from 'redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { ampteamURL } from 'src/configs/appURL';

export const fetchAmpTeam = createAsyncThunk("ampteam/getAllAmpTeam",
async () => {
    const res = await axios.get(ampteamURL);
    //const data = await res.json();

    return res.data;
})

const initialState = {
    data: [],
    loading: false,
}

export const appAmpTeamSlice = createSlice({
    name: 'appAmpTeam',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAmpTeam.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchAmpTeam.pending, (state, action) => {
            state.loading = true;
        });
    },
})

export default appAmpTeamSlice.reducer