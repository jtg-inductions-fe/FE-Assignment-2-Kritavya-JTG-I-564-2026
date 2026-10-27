import { getApiError, useGetUserDetailsQuery } from '@services';
import { mapGitHubUserDetails } from '@utils';

/**
 * Fetches a GitHub user's details and exposes the fields used by the UI.
 *
 * @param username - GitHub username to fetch.
 * @returns Profile data, loading state, and API error information.
 */
const useUserDetails = (username: string) => {
    const { data, isLoading, isFetching, isError, error } =
        useGetUserDetailsQuery(username, {
            skip: !username,
        });

    const parsedError = isError ? getApiError(error) : null;
    const userDetails = mapGitHubUserDetails(data);

    return {
        ...userDetails,
        isLoading: isLoading || isFetching,
        isNotFound: parsedError?.status === 404,
        isError,
        errorMessage: parsedError?.message ?? null,
    };
};

export default useUserDetails;
