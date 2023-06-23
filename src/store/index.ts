//** Toolkit imports */
import { configureStore } from '@reduxjs/toolkit';

//** Reducers */
import user from './apps/user';
import chwprofile from './apps/chwprofile'

export const store = configureStore({
    reducer: {
        user,
        chwprofile
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>