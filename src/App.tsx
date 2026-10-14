import { RouterProvider } from 'react-router-dom';

import { AppSnackbarContainer, GlobalErrorBoundary } from '@components';
import { router } from '@routes';

const App = () => (
    <>
        <GlobalErrorBoundary>
            <RouterProvider router={router} />
        </GlobalErrorBoundary>
        <AppSnackbarContainer />
    </>
);

export default App;
