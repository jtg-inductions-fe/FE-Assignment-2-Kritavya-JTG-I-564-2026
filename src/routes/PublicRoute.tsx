import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constant';
import { useAppSelector } from '@store';

const PublicRoute = () => {
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );

    if (isAuthenticated) {
        return <Navigate to={ROUTES.HOME} replace />;
    }

    return <Outlet />;
};

export default PublicRoute;
