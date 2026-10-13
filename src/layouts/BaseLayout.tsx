import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

const BaseLayout = () => (
    <Box>
        <Outlet />
    </Box>
);

export default BaseLayout;
