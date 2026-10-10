import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    // TODO: Add necessary colors here
    primary: {
        main: COLORS.PRIMARY.MAIN,
        light: COLORS.PRIMARY.LIGHT,
        dark: COLORS.PRIMARY.DARK,
        contrastText: COLORS.PRIMARY.CONTRAST_TEXT,
    },
    secondary: {
        main: COLORS.SECONDARY.MAIN,
        light: COLORS.SECONDARY.LIGHT,
        dark: COLORS.SECONDARY.DARK,
        contrastText: COLORS.SECONDARY.CONTRAST_TEXT,
    },
    background: {
        default: COLORS.BACKGROUND.DEFAULT,
        paper: COLORS.BACKGROUND.PAPER,
    },
    text: {
        primary: COLORS.TEXT.PRIMARY,
        secondary: COLORS.TEXT.SECONDARY,
    },
    divider: COLORS.BORDER.MAIN,
    success: {
        main: COLORS.SUCCESS.MAIN,
        light: COLORS.SUCCESS.LIGHT,
        dark: COLORS.SUCCESS.DARK,
    },
    error: {
        main: COLORS.ERROR.MAIN,
        light: COLORS.ERROR.LIGHT,
        dark: COLORS.ERROR.DARK,
    },
    info: {
        main: COLORS.INFO.MAIN,
        light: COLORS.INFO.LIGHT,
        dark: COLORS.INFO.DARK,
    },
    warning: {
        main: COLORS.WARNING.MAIN,
        light: COLORS.WARNING.LIGHT,
        dark: COLORS.WARNING.DARK,
    },
};
