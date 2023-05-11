import { Dispatch } from "redux";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const appAmpCoordinatorSlice = createSlice({
    name: 'appAmpCoordinator',
    initialState: 0,
    reducers: {},
})

export default appAmpCoordinatorSlice.reducer