import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Tooltip, Typography } from '@mui/material';

import { AppButton, AppMenu } from '@components';
import { useNavbar } from '@hooks';

import {
    StyledAppBar,
    StyledBrand,
    StyledProfileAvatar,
    StyledToolBar,
} from './Navbar.styles';
import type { NavigationBarProps } from './Navbar.types';

const Navbar = ({ isAuthenticated = false, avatarUrl }: NavigationBarProps) => {
    const {
        isDesktop,
        anchorEl,
        setAnchorEl,
        menuItems,
        handleHomeClick,
        handleLoginClick,
        handleMenuClose,
    } = useNavbar();

    return (
        <StyledAppBar position="sticky" elevation={0}>
            <StyledToolBar>
                <StyledBrand onClick={handleHomeClick}>
                    <GitHubIcon fontSize="large" />

                    <Typography
                        variant="h4"
                        fontFamily="Azonix"
                        pt={1.5}
                        display={{ xs: 'none', sm: 'block' }}
                    >
                        GitHub Explorer
                    </Typography>
                </StyledBrand>

                {!isAuthenticated ? (
                    <AppButton
                        onClick={handleLoginClick}
                        startIcon={isDesktop ? <GitHubIcon /> : undefined}
                    >
                        {isDesktop ? 'Sign in with GitHub' : 'Sign In'}
                    </AppButton>
                ) : (
                    <>
                        <Tooltip title="Account">
                            <IconButton
                                onClick={(event) =>
                                    setAnchorEl(event.currentTarget)
                                }
                            >
                                <StyledProfileAvatar
                                    src={avatarUrl}
                                    alt="Profile"
                                >
                                    {!avatarUrl && <AccountCircleIcon />}
                                </StyledProfileAvatar>
                            </IconButton>
                        </Tooltip>

                        <AppMenu
                            anchorEl={anchorEl}
                            onClose={handleMenuClose}
                            items={menuItems}
                        />
                    </>
                )}
            </StyledToolBar>
        </StyledAppBar>
    );
};

export default Navbar;
