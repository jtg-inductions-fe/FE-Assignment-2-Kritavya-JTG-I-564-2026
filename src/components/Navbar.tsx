import GitHubIcon from '@mui/icons-material/GitHub';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { theme } from '@theme';

const Navbar = () => (
    <AppBar
        position="sticky"
        color="secondary"
        elevation={1}
        sx={{
            backgroundColor: 'background.default',
            py: theme.spacing(1.5),
            px: {
                xs: theme.spacing(2),
                md: theme.spacing(6),
            },
        }}
    >
        <Toolbar>
            <Box
                component="a"
                href="/"
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: theme.spacing(3),
                    textDecoration: 'none',
                    color: 'inherit',
                }}
            >
                <GitHubIcon fontSize="large" />

                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'Azonix',
                        lineHeight: '1 !important',
                        pt: theme.spacing(1.5),
                    }}
                >
                    GitHub Explorer
                </Typography>
            </Box>
        </Toolbar>
    </AppBar>
);

export default Navbar;
