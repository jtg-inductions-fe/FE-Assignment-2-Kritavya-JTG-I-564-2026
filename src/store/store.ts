import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@services';

import { snackbarReducer } from './slices';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        snackbar: snackbarReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
