import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { NavBar } from '@components';

const BaseLayout = () => (
    <>
        <NavBar />
        <Box component={'main'}>
            <Outlet />
        </Box>
    </>
);

export default BaseLayout;
