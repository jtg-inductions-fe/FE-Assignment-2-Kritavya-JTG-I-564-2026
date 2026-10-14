import Slide, { type SlideProps } from '@mui/material/Slide';

import { StyledSnackbar, StyledSnackbarAlert } from './AppSnackbar.styles';
import type { AppSnackbarProps } from './AppSnackbar.types';

const SlideFromRight = (props: SlideProps) => (
    <Slide {...props} direction="left" />
);

const AppSnackbar = ({
    id,
    open,
    message,
    severity,
    onClose,
    onExited,
    autoHideDuration = 4000,
}: AppSnackbarProps) => (
    <StyledSnackbar
        key={id}
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={(_, reason) => {
            if (reason !== 'clickaway') {
                onClose();
            }
        }}
        TransitionProps={{ onExited }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        TransitionComponent={SlideFromRight}
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
