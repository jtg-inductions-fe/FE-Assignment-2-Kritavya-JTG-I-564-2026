import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

/**
 * Defines the state used to manage the user search input.
 */
interface SearchState {
    /** Current value entered in the search field. */
    inputValue: string;
}

/** Initial state of the search slice. */
const initialState: SearchState = {
    inputValue: '',
};

/**
 * Manages the search input state using Redux Toolkit.
 */
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        /**
         * Updates the search input with the provided value.
         *
         * @param state - The current search state.
         * @param action - Action containing the new search input value.
         */
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.inputValue = action.payload;
        },

        /**
         * Resets the search input to an empty string.
         *
         * @param state - The current search state.
         */
        clearSearch: (state) => {
            state.inputValue = '';
        },
    },
});

export const { setSearchValue, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;
