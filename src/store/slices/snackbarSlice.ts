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

/**
 * Manages snackbar notifications, including adding new notifications
 * and removing them when they are no longer needed.
 */
const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        /**
         * Adds a new snackbar with a unique ID and the given message and severity.
         * Increments the ID counter for the next snackbar.
         *
         * @param state - The current snackbar state.
         * @param action - The message and severity of the snackbar to display.
         */
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

        /**
         * Removes a snackbar from the state using its ID.
         *
         * @param state - The current snackbar state.
         * @param action - The ID of the snackbar to remove.
         */
        hideSnackbar: (state, action: PayloadAction<number>) => {
            state.snackbars = state.snackbars.filter(
                (snackbar) => snackbar.id !== action.payload,
            );
        },
    },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
