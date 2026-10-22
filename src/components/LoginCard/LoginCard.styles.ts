import {
    Alert,
    Box,
    Card,
    CardContent,
    Link,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
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

export const BrandHeaderStack = styled(Stack)(({ theme: { spacing } }) => ({
    alignItems: 'center',
    gap: spacing(1),
    marginBottom: spacing(3),
}));

export const BrandLogoWrapper = styled(Box)(({ theme: { palette } }) => ({
    color: palette.primary.dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const BrandText = styled(Typography)(({ theme: { palette } }) => ({
    fontFamily: 'Azonix',
    fontSize: '1.3rem',
    letterSpacing: '0.18em',
    color: palette.primary.dark,
    textAlign: 'center',
}));

export const TitleStack = styled(Stack)(({ theme: { spacing } }) => ({
    alignItems: 'center',
    textAlign: 'center',
    gap: spacing(1),
    marginBottom: spacing(4),
}));

export const CardTitle = styled(Typography)(({ theme: { palette } }) => ({
    color: palette.primary.dark,
    fontWeight: 700,
}));

export const CardSubtitle = styled(Typography)(({ theme: { palette } }) => ({
    color: palette.text.secondary,
    maxWidth: 400,
}));

export const FormContainer = styled('form')({
    width: '100%',
});

export const FormStack = styled(Stack)(({ theme: { spacing } }) => ({
    gap: spacing(2.5),
}));

export const FieldGroup = styled(Stack)(({ theme: { spacing } }) => ({
    gap: spacing(1),
}));

export const FieldLabel = styled(Typography)(({ theme: { palette } }) => ({
    fontWeight: 600,
    color: palette.primary.dark,
}));

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

export const ScopeLink = styled(Link)(({ theme: { palette } }) => ({
    color: palette.primary.main,
    fontWeight: 600,
}));

export const ErrorAlert = styled(Alert)(({ theme: { spacing } }) => ({
    borderRadius: spacing(2.5),
    alignItems: 'center',
}));
