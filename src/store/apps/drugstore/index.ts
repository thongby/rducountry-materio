//** Redux Imports */
import { Dispatch } from 'redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const appDrugstoreSlice = createSlice({
    name: 'appDrugstore',
    initialState: 0,
    reducers: {},
})

export default appDrugstoreSlice.reducer