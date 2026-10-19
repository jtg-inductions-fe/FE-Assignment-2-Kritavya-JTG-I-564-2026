import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { styled } from '@mui/material/styles';

export const StyledSnackbar = styled(Snackbar)({
    position: 'static',
});

export const StyledSnackbarAlert = styled(Alert)({
    width: '100%',
    alignItems: 'center',
});
