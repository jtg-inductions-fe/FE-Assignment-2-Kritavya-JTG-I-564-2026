import { API_BASE_URL, API_HEADERS, API_TIMEOUT, HTTP_STATUS } from '@constant';
import {
    type BaseQueryFn,
    createApi,
    type FetchArgs,
    fetchBaseQuery,
    type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { showSnackbar } from '@store';
import { transformKeysToCamelCase } from '@utils';

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

    if (result.error && result.error.status !== HTTP_STATUS.NOT_FOUND) {
        const error = getApiError(result.error);

        api.dispatch(
            showSnackbar({
                message: error.message,
                severity: 'error',
            }),
        );
    }

    if (result.data !== undefined) {
        result.data = transformKeysToCamelCase(result.data);
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({}),
});
