import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)(
    ({ theme: { palette, spacing } }) => ({
        backgroundColor: palette.background.default,
        color: palette.primary.dark,
        padding: spacing(1, 2),
        borderBottom: `2.5px solid ${palette.divider}`,
    }),
);

export const StyledToolBar = styled(Toolbar)(({ theme: { spacing } }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: spacing(14),
}));

export const StyledBrand = styled(Button)(
    ({ theme: { palette, spacing } }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: spacing(1.5),
        color: palette.primary.dark,
        textTransform: 'none',
        padding: 0,
    }),
);

export const StyledBrandTitle = styled(Typography)(
    ({ theme: { spacing, breakpoints } }) => ({
        fontFamily: 'Azonix',
        paddingTop: spacing(1.5),

        [breakpoints.down('sm')]: {
            display: 'none',
        },
    }),
);

export const StyledProfileAvatar = styled(Avatar)(({ theme: { palette } }) => ({
    backgroundColor: palette.primary.dark,
}));
