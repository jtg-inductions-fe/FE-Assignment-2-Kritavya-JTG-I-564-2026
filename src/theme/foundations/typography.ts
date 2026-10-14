import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constant';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units.
     * @param px - The pixel value to convert.
     * @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}` + 'rem',
};

/**
 * Creates a typography block with various styles
 * @param theme - Theme object to access the breakpoints.
 * @returns The function returns a TypographyOptions object, which includes various typography settings,
 */
const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: 'Inter',
    htmlFontSize: HTML_FONT_SIZE,

    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,

    h1: {
        fontSize: typographyUtil.pxToRem(32),
        fontWeight: 700,
        lineHeight: 1.2,
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(48),
            lineHeight: 1.15,
        },
    },
    h2: {
        fontSize: typographyUtil.pxToRem(28),
        fontWeight: 700,
        lineHeight: 1.25,
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(36),
        },
    },
    h3: {
        fontSize: typographyUtil.pxToRem(24),
        fontWeight: 600,
        lineHeight: 1.3,
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(28),
            lineHeight: 1.25,
        },
    },
    h4: {
        fontSize: typographyUtil.pxToRem(20),
        fontWeight: 600,
        lineHeight: 1.35,
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(24),
            lineHeight: 1.3,
        },
    },
    h5: {
        fontSize: typographyUtil.pxToRem(18),
        fontWeight: 600,
        lineHeight: 1.4,
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(20),
            lineHeight: 1.4,
        },
    },
    h6: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 600,
        lineHeight: 1.4,
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(18),
            lineHeight: 1.4,
        },
    },
    body1: {
        fontSize: typographyUtil.pxToRem(16),
        lineHeight: 1.6,
    },
    body2: {
        fontSize: typographyUtil.pxToRem(14),
        lineHeight: 1.5,
    },
});

export const typography = { typographyStyle, typographyUtil };
