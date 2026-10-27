import { API_ENDPOINTS } from '@constant';
import { baseApi } from '@services';

import type { GitHubUserDetails } from './user.types';

/**
 * Defines API endpoints for fetching GitHub user details and verifying
 * Personal Access Tokens.
 */
export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        /**
         * Fetches the public profile details of a GitHub user.
         *
         * @param username - The GitHub username whose details are requested.
         * @returns The GitHub user's profile details.
         */
        getUserDetails: builder.query<GitHubUserDetails, string>({
            query: (username) => ({
                url: API_ENDPOINTS.USER_DETAILS(username),
            }),
        }),

        /**
         * Verifies a GitHub Personal Access Token by fetching the
         * authenticated user's profile.
         *
         * @param token - The GitHub Personal Access Token to verify.
         * @returns The authenticated GitHub user's profile details.
         */
        verifyPatToken: builder.query<GitHubUserDetails, string>({
            query: (token) => ({
                url: API_ENDPOINTS.AUTHENTICATED_USER,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),

        /**
         * Checks if the authenticated user is following a specific GitHub user.
         *
         * @param username - The GitHub username to check.
         * @returns True if the user is followed (204 status), or false if not (404 status).
         */
        getFollowingStatus: builder.query<boolean, string>({
            query: (username) => ({
                url: API_ENDPOINTS.USER_FOLLOWING(username),
                responseHandler: (response) =>
                    Promise.resolve(response.status === 204),
                validateStatus: (response) =>
                    response.status === 204 || response.status === 404,
            }),
        }),

        /**
         * Follows a specific GitHub user.
         *
         * @param username - The GitHub username to follow.
         * @returns A promise that resolves when the mutation completes.
         */
        followUser: builder.mutation<void, string>({
            query: (username) => ({
                url: API_ENDPOINTS.USER_FOLLOWING(username),
                method: 'PUT',
            }),
        }),

        /**
         * Unfollows a specific GitHub user.
         *
         * @param username - The GitHub username to unfollow.
         * @returns A promise that resolves when the mutation completes.
         */
        unfollowUser: builder.mutation<void, string>({
            query: (username) => ({
                url: API_ENDPOINTS.USER_FOLLOWING(username),
                method: 'DELETE',
            }),
        }),
    }),
});

/**
 * Generated RTK Query hooks for fetching user details and verifying
 * Personal Access Tokens.
 */
export const {
    useGetUserDetailsQuery,
    useLazyVerifyPatTokenQuery,
    useGetFollowingStatusQuery,
    useFollowUserMutation,
    useUnfollowUserMutation,
} = userApi;
