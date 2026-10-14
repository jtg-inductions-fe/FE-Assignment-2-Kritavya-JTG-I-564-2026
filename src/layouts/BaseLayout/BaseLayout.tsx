import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

const BaseLayout = () => (
    <Box component={'main'}>
        <Outlet />
    </Box>
);

export default BaseLayout;
