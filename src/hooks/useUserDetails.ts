import { useCallback } from 'react';

import { useParams } from 'react-router-dom';

import { getApiError, useGetUserDetailsQuery } from '@services';
import { dateFormatter, mapGitHubUserDetails } from '@utils';

/**
 * Fetches profile data for a GitHub user and exposes the state
 * required by the user details page.
 *
 * @param profileUsername - Optional username for a specific profile,
 * such as the signed-in user's profile.
 * @returns Profile data, loading/error states, retry handler and member-since date.
 */
const useUserDetails = (profileUsername?: string) => {
    const { username: routeUsername } = useParams<{
        username: string;
    }>();

    const username = profileUsername ?? routeUsername ?? '';

    const { data, isLoading, isFetching, isError, error, refetch } =
        useGetUserDetailsQuery(username, {
            skip: !username,
        });

    const parsedError = isError ? getApiError(error) : null;
    const userDetails = mapGitHubUserDetails(data);

    const handleRetry = useCallback(() => {
        void refetch();
    }, [refetch]);

    const user = {
        ...userDetails,
        isLoading: isLoading || isFetching,
        isNotFound: parsedError?.status === 404,
        isError,
        errorMessage: parsedError?.message ?? null,
        handleRetry,
    };

    return {
        username,
        user,
        isLoading: user.isLoading,
        isNotFound: user.isNotFound,
        isError: user.isError,
        errorMessage: user.errorMessage,
        memberSince: dateFormatter(user.createdAt),
    };
};

export default useUserDetails;
