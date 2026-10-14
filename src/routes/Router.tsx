import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@constant';
import { BaseLayout } from '@layouts';
import {
    HomePage,
    LoginPage,
    NotFoundPage,
    ProfilePage,
    UserDetailsPage,
} from '@pages';

import ErrorBoundary from './ErrorBoundary';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <BaseLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: ROUTES.USER_DETAILS,
                element: <UserDetailsPage />,
            },
            {
                element: <PublicRoute isAuthenticated={false} />,
                children: [
                    {
                        path: ROUTES.LOGIN,
                        element: <LoginPage />,
                    },
                ],
            },
            {
                element: <ProtectedRoute isAuthenticated={false} />,
                children: [
                    {
                        path: ROUTES.PROFILE,
                        element: <ProfilePage />,
                    },
                ],
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
]);
