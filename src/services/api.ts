import { API_BASE_URL } from '@constant';
import {
    type BaseQueryFn,
    createApi,
    type FetchArgs,
    fetchBaseQuery,
    type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { showSnackbar } from '@store';

import { getApiError } from './apiError';

const rawBaseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    timeout: 10000,
    prepareHeaders: (headers) => {
        headers.set('Accept', 'application/vnd.github+json');
        headers.set('X-GitHub-Api-Version', '2026-03-10');
        return headers;
    },
});

const baseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await rawBaseQuery(args, api, extraOptions);

    if (result.error) {
        if (result.error.status !== 404) {
            const error = getApiError(result.error);

            api.dispatch(
                showSnackbar({
                    message: error.message,
                    severity: 'error',
                }),
            );
        }
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({}),
});
