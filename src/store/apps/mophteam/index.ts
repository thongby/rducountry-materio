//** Redux Imports */
import { Dispatch } from 'redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { mophteamURL } from 'src/configs/appURL';

export const fetchMophTeam = createAsyncThunk("mophteam/getAllMophTeam",
async () => {
    const res = await axios.get(mophteamURL);
    //const data = await res.json();

    return res.data;
})

const initialState = {
    data: [],
    loading: false,
}

export const appMophTeamSlice = createSlice({
    name: 'appMophTeam',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMophTeam.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchMophTeam.pending, (state, action) => {
            state.loading = true;
        });
    },
})

export default appMophTeamSlice.reducer