import { Dispatch } from "redux";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const appRegionCoordinatorSlice = createSlice({
    name: 'appRegionCoordinator',
    initialState: 0,
    reducers: {},
})

export default appRegionCoordinatorSlice.reducer;