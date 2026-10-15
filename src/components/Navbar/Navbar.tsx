import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { IconButton, Menu, Tooltip, useMediaQuery } from '@mui/material';

import { AppButton } from '@components';

import {
    StyledAppBar,
    StyledBrand,
    StyledBrandTitle,
    StyledMenuItem,
    StyledProfileAvatar,
    StyledToolBar,
} from './Navbar.styles';
import type { NavigationBarProps } from './Navbar.types';

const Navbar = ({
    isAuthenticated = false,
    avatarUrl,
    onLogout,
}: NavigationBarProps) => {
    const navigate = useNavigate();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleLogout = () => {
        setAnchorEl(null);
        onLogout?.();
    };

    return (
        <StyledAppBar position="sticky" elevation={0}>
            <StyledToolBar>
                <StyledBrand onClick={() => void navigate('/')}>
                    <GitHubIcon fontSize="large" />
                    <StyledBrandTitle variant="h4">
                        GitHub Explorer
                    </StyledBrandTitle>
                </StyledBrand>

                {!isAuthenticated ? (
                    <AppButton
                        variant="contained"
                        onClick={() => void navigate('/login')}
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

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <StyledMenuItem
                                onClick={() => {
                                    setAnchorEl(null);
                                    void navigate('/profile');
                                }}
                            >
                                <PersonOutlineIcon fontSize="small" />
                                My Profile
                            </StyledMenuItem>

                            <StyledMenuItem onClick={handleLogout}>
                                <LogoutIcon fontSize="small" />
                                Logout
                            </StyledMenuItem>
                        </Menu>
                    </>
                )}
            </StyledToolBar>
        </StyledAppBar>
    );
};

export default Navbar;
