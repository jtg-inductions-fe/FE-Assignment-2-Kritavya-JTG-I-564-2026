import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { NavBar } from '@components';
import { GlobalErrorBoundary } from '@components';

const BaseLayout = () => (
    <>
        <NavBar isAuthenticated={false} />
        <Box component={'main'}>
            <GlobalErrorBoundary>
                <Outlet />
            </GlobalErrorBoundary>
        </Box>
    </>
);

export default BaseLayout;
