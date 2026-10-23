import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@constant';
import { BaseLayout } from '@layouts';
import { HomePage, NotFoundPage } from '@pages';

import ErrorBoundary from './ErrorBoundary';

export const router = createBrowserRouter([
    {
        element: <BaseLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: ROUTES.HOME,
                element: <HomePage />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
]);
