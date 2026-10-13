import Snackbar from '@mui/material/Snackbar';

import { StyledSnackbarAlert } from './AppSnackbar.styles';
import type { AppSnackbarProps } from './AppSnackbar.types';

const AppSnackbar = ({
    id,
    open,
    message,
    severity,
    onClose,
    autoHideDuration = 4000,
}: AppSnackbarProps) => (
    <Snackbar
        key={id}
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={(_, reason) => {
            if (reason !== 'clickaway') {
                onClose();
            }
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
        <StyledSnackbarAlert
            severity={severity}
            variant="filled"
            onClose={onClose}
        >
            {message}
        </StyledSnackbarAlert>
    </Snackbar>
);

export default AppSnackbar;
