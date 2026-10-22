import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LoginSection = styled(Box)(
    ({ theme: { spacing, breakpoints } }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacing(4),
        width: '100%',
        maxWidth: 1536,
        minHeight: 'calc(100vh - 66px)',
        marginInline: 'auto',
        padding: spacing(4),
        boxSizing: 'border-box',

        [breakpoints.down('md')]: {
            flexDirection: 'column',
            justifyContent: 'center',
        },

        [breakpoints.down('sm')]: {
            padding: spacing(2),
        },
    }),
);
