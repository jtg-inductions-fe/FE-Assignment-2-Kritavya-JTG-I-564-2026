import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constant';
import { useAppSelector } from '@store';

const ProtectedRoute = () => {
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
