import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    paddingBlock: theme.spacing(1.5),
    paddingInline: theme.spacing(2),

    [theme.breakpoints.up('md')]: {
        paddingInline: theme.spacing(6),
    },
}));

export const NavbarLink = styled('a')(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing(3),
    color: 'inherit',
    textDecoration: 'none',
}));

export const NavbarTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Azonix',
    lineHeight: '1 !important',
    paddingTop: theme.spacing(1.5),
}));
