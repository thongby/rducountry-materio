//** Redux Imports */
import { Dispatch } from 'redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { chwteamURL } from 'src/configs/appURL';

export const fetchChwTeam = createAsyncThunk("chwteam/getAllChwTeam",
async () => {
    const res = await axios.get(chwteamURL);
    //const data = await res.json();

    return res.data;
})

const initialState = {
    data: [],
    loading: false,
}

export const appChwTeamSlice = createSlice({
    name: 'appChwTeam',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchChwTeam.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchChwTeam.pending, (state, action) => {
            state.loading = true;
        });
    },

})

export default appChwTeamSlice.reducer