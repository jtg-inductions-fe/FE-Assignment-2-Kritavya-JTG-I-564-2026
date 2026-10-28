import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useMediaQuery } from '@mui/material';

import { ROUTES } from '@constant';
import { clearCredentials, showSnackbar, useAppDispatch } from '@store';

/**
 * Handles navbar state, responsive layout, navigation and logout.
 */
const useNavbar = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // Responsive design flag used to toggle between desktop headers and mobile/hamburger setups
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    // Tracks the DOM element clicked to open the profile menu. Used by MUI Popover/Menu anchors.
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleHomeClick = () => {
        void navigate(ROUTES.HOME);
    };

    const handleLoginClick = () => {
        void navigate(ROUTES.LOGIN);
    };

    const handleProfileClick = () => {
        setAnchorEl(null);
        void navigate(ROUTES.PROFILE);
    };

    const handleLogout = () => {
        setAnchorEl(null);

        dispatch(clearCredentials());
        dispatch(
            showSnackbar({
                message: 'Signed out successfully.',
                severity: 'info',
            }),
        );

        void navigate(ROUTES.LOGIN);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Configuration for generating action buttons in the profile dropdown
    const menuItems = [
        {
            label: 'My Profile',
            icon: PersonOutlineIcon,
            onClick: handleProfileClick,
        },
        {
            label: 'Logout',
            icon: LogoutIcon,
            onClick: handleLogout,
        },
    ];

    return {
        isDesktop,
        anchorEl,
        setAnchorEl,
        menuItems,
        handleHomeClick,
        handleLoginClick,
        handleMenuClose,
    };
};

export default useNavbar;
