import { useAppDispatch, useAppSelector } from '@store';
import { hideSnackbar } from '@store';

import AppSnackbar from './AppSnackbar';

const AppSnackbarContainer = () => {
    const dispatch = useAppDispatch();

    const { id, open, message, severity } = useAppSelector(
        (state) => state.snackbar,
    );

    return (
        <AppSnackbar
            id={id}
            open={open}
            message={message}
            severity={severity}
            onClose={() => dispatch(hideSnackbar())}
        />
    );
};

export default AppSnackbarContainer;
