import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { GlobalErrorBoundary, NavBar } from '@components';
import { useAppSelector } from '@store';

const BaseLayout = () => {
    const { isAuthenticated, avatarUrl } = useAppSelector(
        (state) => state.auth,
    );

    return (
        <>
            <NavBar
                isAuthenticated={isAuthenticated}
                avatarUrl={avatarUrl ?? undefined}
            />

            <Box component="main">
                <GlobalErrorBoundary>
                    <Outlet />
                </GlobalErrorBoundary>
            </Box>
        </>
    );
};

export default BaseLayout;
