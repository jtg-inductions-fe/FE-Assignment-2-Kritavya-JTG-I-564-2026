import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { ErrorFallback } from '@components';

const ErrorBoundary = () => {
    const error = useRouteError();

    const message = isRouteErrorResponse(error)
        ? `${error.status} ${error.statusText}`
        : error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.';

    return <ErrorFallback message={message} />;
};

export default ErrorBoundary;
