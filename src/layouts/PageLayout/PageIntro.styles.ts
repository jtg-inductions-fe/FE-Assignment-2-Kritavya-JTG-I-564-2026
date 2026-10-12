import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageIntroContainer = styled(Stack)({
    width: '100%',
});

export const PageEyebrowContainer = styled(Stack)(({ theme: { spacing } }) => ({
    marginBottom: spacing(3),
}));

export const PageEyebrowAccent = styled(Box)(({ theme: { palette } }) => ({
    width: 32,
    height: 7,
    flexShrink: 0,
    backgroundColor: palette.secondary.main,
    borderRadius: '9999px',
}));

export const PageEyebrowText = styled(Typography)(({ theme: { palette } }) => ({
    fontSize: '1.375rem',
    lineHeight: '2rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    color: palette.text.secondary,
}));

export const PageHeading = styled('h1')(({ theme: { breakpoints } }) => ({
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 0.75,

    [breakpoints.up('sm')]: {
        rowGap: 1,
    },
}));

interface PageHeadingLineProps {
    outlined?: boolean;
}

export const PageHeadingLine = styled('span', {
    shouldForwardProp: (prop) => prop !== 'outlined',
})<PageHeadingLineProps>(
    ({ theme: { breakpoints, palette }, outlined = false }) => ({
        fontFamily: 'Anton, sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 'clamp(3.2rem, 13vw, 5.6rem)',
        lineHeight: 1.2,
        letterSpacing: '0.015em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        color: outlined ? 'transparent' : palette.primary.dark,
        WebkitTextStroke: outlined ? `2px ${palette.primary.dark}` : 'initial',

        [breakpoints.up('sm')]: {
            fontSize: 'clamp(3.2rem, 8vw, 6rem)',
        },

        [breakpoints.up('md')]: {
            fontSize: 'clamp(6rem, 5.8vw, 10rem)',
        },
    }),
);

export const PageDescription = styled(Typography)(
    ({ theme: { spacing, palette } }) => ({
        marginTop: spacing(3),
        maxWidth: 680,
        color: palette.text.secondary,
        fontSize: '1.5rem',
        lineHeight: 1.6,
    }),
);

export const PageActions = styled(Stack)(({ theme: { spacing } }) => ({
    marginTop: spacing(8),
}));
