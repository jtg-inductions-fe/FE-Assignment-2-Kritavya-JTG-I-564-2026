import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constant';

interface PublicRouteProps {
    isAuthenticated: boolean;
}

const PublicRoute = ({ isAuthenticated }: PublicRouteProps) => {
    if (isAuthenticated) {
        return <Navigate to={ROUTES.HOME} replace />;
    }

    return <Outlet />;
};

export default PublicRoute;
