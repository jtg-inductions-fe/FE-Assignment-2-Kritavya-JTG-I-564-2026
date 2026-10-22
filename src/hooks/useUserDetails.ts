import { useCallback } from 'react';

import { getApiError, useGetUserDetailsQuery } from '@services';
import { mapGitHubUserDetails } from '@utils';

/**
 * Fetches a GitHub user's details and exposes the fields used by the UI.
 *
 * @param username - GitHub username to fetch.
 * @returns Profile data, loading state, and API error information.
 */
const useUserDetails = (username: string) => {
    const { data, isLoading, isFetching, isError, error, refetch } =
        useGetUserDetailsQuery(username, {
            skip: !username,
        });

    const parsedError = isError ? getApiError(error) : null;
    const userDetails = mapGitHubUserDetails(data);

    /**
     * Retries fetching the user's profile details.
     */
    const handleRetry = useCallback(() => {
        void refetch();
    }, [refetch]);

    return {
        ...userDetails,
        isLoading: isLoading || isFetching,
        isNotFound: parsedError?.status === 404,
        isError,
        errorMessage: parsedError?.message ?? null,
        handleRetry,
    };
};

export default useUserDetails;
