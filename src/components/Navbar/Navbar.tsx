import GitHubIcon from '@mui/icons-material/GitHub';
import Toolbar from '@mui/material/Toolbar';

import {
    NavbarLink,
    NavbarTitle,
    StyledAppBar,
} from '@components/Navbar/Navbar.styles';

const Navbar = () => (
    <StyledAppBar position="sticky" color="secondary" elevation={1}>
        <Toolbar>
            <NavbarLink href="/">
                <GitHubIcon fontSize="large" />

                <NavbarTitle variant="h4">GitHub Explorer</NavbarTitle>
            </NavbarLink>
        </Toolbar>
    </StyledAppBar>
);

export default Navbar;
