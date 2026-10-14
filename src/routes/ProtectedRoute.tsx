import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constant';

import { RouteProps } from './types';

const ProtectedRoute = ({ isAuthenticated }: RouteProps) => {
    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
