import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Tooltip } from '@mui/material';

import { AppButton, AppMenu } from '@components';
import { useNavbar } from '@hooks';

import {
    StyledAppBar,
    StyledBrand,
    StyledBrandTitle,
    StyledProfileAvatar,
    StyledToolBar,
} from './Navbar.styles';
import type { NavigationBarProps } from './Navbar.types';

const Navbar = ({
    isAuthenticated = false,
    avatarUrl,
    onLogout,
}: NavigationBarProps) => {
    const {
        isDesktop,
        anchorEl,
        setAnchorEl,
        menuItems,
        handleHomeClick,
        handleLoginClick,
        handleMenuClose,
    } = useNavbar({ onLogout });

    return (
        <StyledAppBar position="sticky" elevation={0}>
            <StyledToolBar>
                <StyledBrand onClick={handleHomeClick}>
                    <GitHubIcon fontSize="large" />

                    <StyledBrandTitle variant="h4">
                        GitHub Explorer
                    </StyledBrandTitle>
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
