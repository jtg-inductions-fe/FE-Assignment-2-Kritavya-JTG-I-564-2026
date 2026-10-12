import { RouterProvider } from 'react-router-dom';

import { AppSnackbarContainer } from '@components';
import { router } from '@routes';

const App = () => (
    <>
        <RouterProvider router={router} />
        <AppSnackbarContainer />
    </>
);

export default App;
