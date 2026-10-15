import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constant';

interface ProtectedRouteProps {
    isAuthenticated: boolean;
}

const ProtectedRoute = ({ isAuthenticated }: ProtectedRouteProps) => {
    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
