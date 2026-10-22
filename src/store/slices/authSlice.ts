import { STORAGE_KEYS } from '@constant';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
    username: string | null;
    avatarUrl: string | null;
    isAuthenticated: boolean;
}

/**
 * Retrieves an item from localStorage.
 *
 * @param key - The localStorage key to retrieve.
 * @returns The stored value, or null if the item is unavailable or access fails.
 */
const getStoredItem = (key: string): string | null => {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
};

const initialToken = getStoredItem(STORAGE_KEYS.AUTH_TOKEN);
const initialUsername = getStoredItem(STORAGE_KEYS.AUTH_USERNAME);
const initialAvatar = getStoredItem(STORAGE_KEYS.AUTH_AVATAR);

/**
 * Initializes authentication state using the saved credentials.
 */
const initialState: AuthState = {
    token: initialToken,
    username: initialUsername,
    avatarUrl: initialAvatar,
    isAuthenticated: Boolean(initialToken && initialUsername),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        /**
         * Saves the user's credentials in Redux state and localStorage.
         *
         * @param state - The current authentication state.
         * @param action - The user's token, username, and avatar URL.
         */
        setCredentials: (
            state,
            action: PayloadAction<{
                token: string;
                username: string;
                avatarUrl: string;
            }>,
        ) => {
            const { token, username, avatarUrl } = action.payload;

            state.token = token;
            state.username = username;
            state.avatarUrl = avatarUrl;
            state.isAuthenticated = true;

            try {
                localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
                localStorage.setItem(STORAGE_KEYS.AUTH_USERNAME, username);
                localStorage.setItem(STORAGE_KEYS.AUTH_AVATAR, avatarUrl);
            } catch {
                // Redux state remains updated even if localStorage access fails.
            }
        },

        /**
         * Clears the user's credentials from Redux state and localStorage.
         *
         * @param state - The current authentication state.
         */
        clearCredentials: (state) => {
            state.token = null;
            state.username = null;
            state.avatarUrl = null;
            state.isAuthenticated = false;

            try {
                localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
                localStorage.removeItem(STORAGE_KEYS.AUTH_USERNAME);
                localStorage.removeItem(STORAGE_KEYS.AUTH_AVATAR);
            } catch {
                // Redux state remains cleared even if localStorage access fails.
            }
        },
    },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;
