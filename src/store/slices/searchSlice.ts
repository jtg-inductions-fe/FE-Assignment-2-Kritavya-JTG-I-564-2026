import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
    inputValue: string;
}

const initialState: SearchState = {
    inputValue: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.inputValue = action.payload;
        },
        clearSearch: (state) => {
            state.inputValue = '';
        },
    },
});

export const { setSearchValue, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;
