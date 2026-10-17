import { API_ENDPOINTS } from '@constant';
import { baseApi } from '@services';

import type { GitHubUserDetails } from './user.types';

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserDetails: builder.query<GitHubUserDetails, string>({
            query: (username) => ({
                url: API_ENDPOINTS.USER_DETAILS(username),
            }),
        }),
    }),
});

export const { useGetUserDetailsQuery } = userApi;
