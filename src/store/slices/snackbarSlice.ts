import type { AlertColor } from '@mui/material';

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface SnackbarItem {
    id: number;
    message: string;
    severity: AlertColor;
}

interface SnackbarState {
    snackbars: SnackbarItem[];
    nextId: number;
}

const initialState: SnackbarState = {
    snackbars: [],
    nextId: 0,
};

const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        showSnackbar: (
            state,
            action: PayloadAction<{
                message: string;
                severity: AlertColor;
            }>,
        ) => {
            state.snackbars.push({
                id: state.nextId,
                ...action.payload,
            });

            state.nextId += 1;
        },

        hideSnackbar: (state, action: PayloadAction<number>) => {
            state.snackbars = state.snackbars.filter(
                (snackbar) => snackbar.id !== action.payload,
            );
        },
    },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
