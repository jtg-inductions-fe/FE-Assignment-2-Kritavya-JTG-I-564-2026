import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import type { PageHeadingLineProps } from './PageIntro.types';

export const PageEyebrowAccent = styled(Box)(({ theme: { palette } }) => ({
    width: 32,
    height: 7,
    flexShrink: 0,
    backgroundColor: palette.secondary.main,
    borderRadius: '9999px',
}));

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
