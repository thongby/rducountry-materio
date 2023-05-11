//** Redux Imports */
import { Dispatch } from 'redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const appGrocerySlice = createSlice({
    name: 'appGrocery',
    initialState: 0,
    reducers: {},
})

export default appGrocerySlice.reducer