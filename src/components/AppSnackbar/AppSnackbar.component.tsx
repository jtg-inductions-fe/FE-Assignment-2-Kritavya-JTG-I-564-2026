import Slide, { type SlideProps } from '@mui/material/Slide';

import { SNACKBAR_AUTO_HIDE_DURATION } from '@constant';
import { useAppSnackbar } from '@hooks';

import {
    StyledSnackbar,
    StyledSnackbarAlert,
    StyledSnackbarContainer,
    StyledSnackbarItem,
} from './AppSnackbar.styles';

const SlideFromRight = (props: SlideProps) => (
    <Slide {...props} direction="left" />
);

const AppSnackbar = () => {
    const { snackbars, closingIds, handleClose, handleExited } =
        useAppSnackbar();

    return (
        <StyledSnackbarContainer>
            {snackbars.map((snackbar) => {
                const onClose = () => handleClose(snackbar.id);

                return (
                    <StyledSnackbarItem key={snackbar.id}>
                        <StyledSnackbar
                            key={snackbar.id}
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
                    </StyledSnackbarItem>
                );
            })}
        </StyledSnackbarContainer>
    );
};

export default AppSnackbar;
