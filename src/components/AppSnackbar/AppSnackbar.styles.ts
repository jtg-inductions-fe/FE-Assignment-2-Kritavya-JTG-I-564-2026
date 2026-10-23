import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { styled } from '@mui/material/styles';

export const StyledSnackbarContainer = styled(Box)(
    ({ theme: { spacing, breakpoints } }) => ({
        position: 'fixed',
        bottom: spacing(6),
        right: spacing(6),
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'flex-end',
        gap: spacing(1),
        pointerEvents: 'none',

        [breakpoints.down('sm')]: {
            right: spacing(2),
            bottom: spacing(2),
        },
    }),
);

export const StyledSnackbarItem = styled(Box)({
    width: 'min(400px, calc(100vw - 32px))',
    pointerEvents: 'auto',
});

export const StyledSnackbar = styled(Snackbar)({
    position: 'static',
});

export const StyledSnackbarAlert = styled(Alert)({
    width: '100%',
    alignItems: 'center',
});
