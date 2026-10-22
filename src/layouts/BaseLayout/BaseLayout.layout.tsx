import { Outlet, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { GlobalErrorBoundary, NavBar } from '@components';
import { ROUTES } from '@constant';
import {
    clearCredentials,
    showSnackbar,
    useAppDispatch,
    useAppSelector,
} from '@store';

const BaseLayout = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, avatarUrl } = useAppSelector(
        (state) => state.auth,
    );

    const handleLogout = () => {
        dispatch(clearCredentials());
        dispatch(
            showSnackbar({
                message: 'Signed out successfully.',
                severity: 'info',
            }),
        );
        void navigate(ROUTES.LOGIN);
    };

    return (
        <>
            <NavBar
                isAuthenticated={isAuthenticated}
                avatarUrl={avatarUrl ?? undefined}
                onLogout={handleLogout}
            />
            <Box component="main">
                <GlobalErrorBoundary>
                    <Outlet />
                </GlobalErrorBoundary>
            </Box>
        </>
    );
};

export default BaseLayout;
