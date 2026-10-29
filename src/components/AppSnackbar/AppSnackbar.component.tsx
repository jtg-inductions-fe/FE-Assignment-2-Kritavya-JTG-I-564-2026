import { Box } from '@mui/material';
import Slide, { type SlideProps } from '@mui/material/Slide';

import { SNACKBAR_AUTO_HIDE_DURATION } from '@constant';
import { useAppSnackbar } from '@hooks';

import { StyledSnackbar, StyledSnackbarAlert } from './AppSnackbar.styles';

const SlideFromRight = (props: SlideProps) => (
    <Slide {...props} direction="left" />
);

const AppSnackbar = () => {
    const { snackbars, closingIds, handleClose, handleExited } =
        useAppSnackbar();

    return (
        <Box
            position="fixed"
            bottom={{ xs: 2, sm: 6 }}
            right={{ xs: 2, sm: 6 }}
            display="flex"
            flexDirection="column-reverse"
            alignItems="flex-end"
            gap={1}
            style={{ pointerEvents: 'none' }}
        >
            {snackbars.map((snackbar) => {
                const onClose = () => handleClose(snackbar.id);

                return (
                    <Box
                        key={snackbar.id}
                        width="min(400px, calc(100vw - 32px))"
                        style={{ pointerEvents: 'auto' }}
                    >
                        <StyledSnackbar
                            open={!closingIds.includes(snackbar.id)}
                            autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
                            onClose={(_, reason) => {
                                if (reason !== 'clickaway') {
                                    onClose();
                                }
                            }}
                            TransitionProps={{
                                onExited: () => handleExited(snackbar.id),
                            }}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            TransitionComponent={SlideFromRight}
                        >
                            <StyledSnackbarAlert
                                severity={snackbar.severity}
                                variant="filled"
                                onClose={onClose}
                            >
                                {snackbar.message}
                            </StyledSnackbarAlert>
                        </StyledSnackbar>
                    </Box>
                );
            })}
        </Box>
    );
};

export default AppSnackbar;
