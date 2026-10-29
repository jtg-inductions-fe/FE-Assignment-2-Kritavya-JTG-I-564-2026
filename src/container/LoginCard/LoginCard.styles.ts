import { Alert, Card, CardContent, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledLoginCard = styled(Card)(
    ({ theme: { palette, spacing } }) => ({
        width: '100%',
        maxWidth: 480,
        margin: spacing(4),
        borderRadius: spacing(4),
        backgroundColor: palette.background.paper,
        border: `1.5px solid ${palette.divider}`,
    }),
);

export const StyledLoginCardContent = styled(CardContent)(
    ({ theme: { spacing, breakpoints } }) => ({
        padding: spacing(6),

        '&:last-child': {
            paddingBottom: spacing(6),
        },

        [breakpoints.down('sm')]: {
            padding: spacing(4, 3),

            '&:last-child': {
                paddingBottom: spacing(4),
            },
        },
    }),
);

export const StyledTextField = styled(TextField)(
    ({ theme: { palette, spacing } }) => ({
        borderRadius: spacing(2.5),
        backgroundColor: palette.background.default,
    }),
);

export const InfoBox = styled(Alert)(({ theme: { palette, spacing } }) => ({
    borderRadius: spacing(2.5),
    backgroundColor: palette.primary.light,
    color: palette.text.secondary,
    border: `1px solid ${palette.divider}`,
    alignItems: 'flex-start',

    '& .MuiAlert-icon': {
        color: palette.primary.main,
    },
}));

export const ErrorAlert = styled(Alert)(({ theme: { spacing } }) => ({
    borderRadius: spacing(2.5),
    alignItems: 'center',
}));
