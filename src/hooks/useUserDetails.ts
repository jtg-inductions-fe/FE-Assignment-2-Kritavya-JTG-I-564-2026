import { useCallback } from 'react';

import { getApiError, useGetUserDetailsQuery } from '@services';

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

    /**
     * Retries fetching the user's profile details.
     */
    const handleRetry = useCallback(() => {
        void refetch();
    }, [refetch]);

    return {
        avatarUrl: data?.avatarUrl ?? '',
        username: data?.login ?? '',
        name: data?.name ?? null,
        bio: data?.bio ?? null,
        company: data?.company ?? null,
        location: data?.location ?? null,
        followers: data?.followers ?? 0,
        following: data?.following ?? 0,
        publicRepos: data?.publicRepos ?? 0,
        githubUrl: data?.htmlUrl ?? '',
        blog: data?.blog ?? null,
        email: data?.email ?? null,
        twitterUsername: data?.twitterUsername ?? null,
        createdAt: data?.createdAt ?? null,
        isLoading: isLoading || isFetching,
        isNotFound: parsedError?.status === 404,
        isError,
        errorMessage: parsedError?.message ?? null,
        handleRetry,
    };
};

export default useUserDetails;
