import type { AlertColor } from '@mui/material';

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface SnackbarState {
    open: boolean;
    message: string;
    severity: AlertColor;
    id: number;
}

const initialState: SnackbarState = {
    open: false,
    message: '',
    severity: 'info',
    id: 0,
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
            state.id += 1;
            state.open = true;
            state.message = action.payload.message;
            state.severity = action.payload.severity;
        },
        hideSnackbar: (state) => {
            state.open = false;
        },
    },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
