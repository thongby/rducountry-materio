//** Toolkit imports */
import { configureStore } from '@reduxjs/toolkit';

//** Reducers */
import user from './apps/user';
import chwprofile from './apps/chwprofile';
import rduampur from './apps/rduampur';
import regionteam from './apps/regionteam';
import mophteam from './apps/mophteam';
import chwteam from './apps/chwteam';
import ampteam from './apps/ampteam';
import grocery from './apps/grocery';
import drugstore from './apps/drugstore';

export const store = configureStore({
    reducer: {
        user,
        chwprofile,
        rduampur,
        grocery,
        drugstore,
        regionteam,
        mophteam,
        chwteam,
        ampteam,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>