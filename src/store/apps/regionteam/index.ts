//** Redux Imports */
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

import { regionteamURL } from 'src/configs/appURL'

export const fetchRegionTeam = createAsyncThunk('regionteam/getAllRegionTeam', async () => {
  const res = await axios.get(regionteamURL)
  //const data = await res.json();

  return res.data
})

const initialState = {
  data: [],
  loading: false
}

export const appRegionTeamSlice = createSlice({
  name: 'appRegionTeam',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegionTeam.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
    });

    builder.addCase(fetchRegionTeam.pending, (state, action) => {
        state.loading = true;
    });
},

})

export default appRegionTeamSlice.reducer
