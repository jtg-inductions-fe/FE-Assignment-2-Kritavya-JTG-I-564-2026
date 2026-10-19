import { createBrowserRouter } from 'react-router-dom';

import { Box } from '@mui/material';

import { ROUTES } from '@constant';
import { BaseLayout } from '@layouts';

export const router = createBrowserRouter([
    {
        element: <BaseLayout />,
        children: [
            {
                path: ROUTES.HOME,
                element: <Box>Hero Section</Box>,
            },
        ],
    },
]);
