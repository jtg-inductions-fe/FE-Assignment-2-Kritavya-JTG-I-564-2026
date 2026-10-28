export { store } from './store';
export { useAppDispatch, useAppSelector } from './hooks';

export type { RootState, AppDispatch } from './store';

export {
    showSnackbar,
    hideSnackbar,
    snackbarReducer,
    setSearchValue,
    clearSearch,
    searchReducer,
    setCredentials,
    clearCredentials,
    authReducer,
} from './slices';
export type { AuthState, SnackbarItem } from './slices';
