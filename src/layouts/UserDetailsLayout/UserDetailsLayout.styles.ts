import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DetailsPageContainer = styled(Box)(
    ({ theme: { spacing, breakpoints } }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '85vh',
        padding: spacing(4),
        boxSizing: 'border-box',

        [breakpoints.down('md')]: {
            padding: spacing(3),
        },

        [breakpoints.down('sm')]: {
            minHeight: 'auto',
            padding: spacing(2),
        },
    }),
);

export const MessageContainer = styled(Stack)(({ theme: { spacing } }) => ({
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: spacing(2),
    padding: spacing(3),
    boxSizing: 'border-box',
}));
