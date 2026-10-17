import { getApiError, useGetUserDetailsQuery } from '@services';

const useUserDetails = (username: string) => {
    const { data, isLoading, isFetching, isError, error } =
        useGetUserDetailsQuery(username, {
            skip: !username,
        });

    const parsedError = isError ? getApiError(error) : null;

    return {
        avatarUrl: data?.avatar_url ?? '',
        username: data?.login ?? '',
        name: data?.name ?? null,
        bio: data?.bio ?? null,
        company: data?.company ?? null,
        location: data?.location ?? null,
        followers: data?.followers ?? 0,
        following: data?.following ?? 0,
        publicRepos: data?.public_repos ?? 0,
        githubUrl: data?.html_url ?? '',
        blog: data?.blog ?? null,
        email: data?.email ?? null,
        twitterUsername: data?.twitter_username ?? null,
        createdAt: data?.created_at ?? null,
        isLoading: isLoading || isFetching,
        isNotFound: parsedError?.status === 404,
        isError,
        errorMessage: parsedError?.message ?? null,
    };
};

export default useUserDetails;
