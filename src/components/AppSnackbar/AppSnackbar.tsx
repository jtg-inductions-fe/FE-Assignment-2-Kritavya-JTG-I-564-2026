import { StyledSnackbar, StyledSnackbarAlert } from './AppSnackbar.styles';
import type { AppSnackbarProps } from './AppSnackbar.types';

const AppSnackbar = ({
    open,
    message,
    severity,
    onClose,
    autoHideDuration = 4000,
}: AppSnackbarProps) => (
    <StyledSnackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={(_, reason) => {
            if (reason !== 'clickaway') {
                onClose();
            }
        }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
    >
        <StyledSnackbarAlert
            severity={severity}
            variant="filled"
            onClose={onClose}
        >
            {message}
        </StyledSnackbarAlert>
    </StyledSnackbar>
);

export default AppSnackbar;
