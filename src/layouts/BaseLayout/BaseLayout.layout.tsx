import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { GlobalErrorBoundary } from '@components';

const BaseLayout = () => (
    <Box component="main">
        <GlobalErrorBoundary>
            <Outlet />
        </GlobalErrorBoundary>
    </Box>
);

export default BaseLayout;
