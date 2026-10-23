import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useMediaQuery } from '@mui/material';

import type { NavigationBarProps } from '@components';
import { ROUTES } from '@constant';

/**
 * Handles the state, media queries, and navigation actions for the application's header/navbar.
 *
 * @param {NavigationBarProps} props - Component properties passed from the navigation bar.
 * @returns An object containing layout flags, menu configuration, and interaction handlers.
 */
const useNavbar = ({ onLogout }: NavigationBarProps) => {
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
        onLogout?.();
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
