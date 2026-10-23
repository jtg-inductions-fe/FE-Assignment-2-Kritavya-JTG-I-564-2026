import { RouterProvider } from 'react-router-dom';

import { AppSnackbar } from '@components';
import { router } from '@routes';

const App = () => (
    <>
        <RouterProvider router={router} />
        <AppSnackbar />
    </>
);

export default App;
