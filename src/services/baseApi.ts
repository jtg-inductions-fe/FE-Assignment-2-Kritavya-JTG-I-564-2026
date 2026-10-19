import { API_BASE_URL, API_HEADERS, API_TIMEOUT } from '@constant';
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
    timeout: API_TIMEOUT,
    prepareHeaders: (headers) => {
        headers.set('Accept', API_HEADERS.ACCEPT);
        headers.set('X-GitHub-Api-Version', API_HEADERS.VERSION);

        return headers;
    },
});

const baseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await rawBaseQuery(args, api, extraOptions);

    if (result.error && result.error.status !== 404) {
        const error = getApiError(result.error);

        api.dispatch(
            showSnackbar({
                message: error.message,
                severity: 'error',
            }),
        );
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({}),
});
