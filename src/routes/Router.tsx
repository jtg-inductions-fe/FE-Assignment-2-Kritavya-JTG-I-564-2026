import { createBrowserRouter } from 'react-router-dom';

import { Box } from '@mui/material';

import { ROUTE_PATHS } from '@constant';
import BaseLayout from '@layouts/BaseLayout';

export const router = createBrowserRouter([
    {
        element: <BaseLayout />,
        children: [
            {
                path: ROUTE_PATHS.HOME,
                element: <Box>Hero Section</Box>,
            },
        ],
    },
]);
