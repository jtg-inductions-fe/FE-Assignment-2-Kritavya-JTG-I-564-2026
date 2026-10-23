import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constant';

import { RouteProps } from './types';

const PublicRoute = ({ isAuthenticated }: RouteProps) => {
    if (isAuthenticated) {
        return <Navigate to={ROUTES.HOME} replace />;
    }

    return <Outlet />;
};

export default PublicRoute;
