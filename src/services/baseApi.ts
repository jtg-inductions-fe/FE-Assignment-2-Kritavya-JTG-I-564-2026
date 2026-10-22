import {
    API_BASE_URL,
    API_HEADERS,
    API_TIMEOUT,
    HTTP_STATUS,
    STORAGE_KEYS,
} from '@constant';
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

        try {
            const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
            if (token && !headers.has('Authorization')) {
                headers.set('Authorization', `Bearer ${token}`);
            }
        } catch {
            // Ignore localStorage access issues
        }

        return headers;
    },
});

const toCamelCase = (key: string) =>
    key.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());

const transformKeysToCamelCase = (value: unknown): unknown => {
    if (Array.isArray(value)) {
        return value.map(transformKeysToCamelCase);
    }

    if (value !== null && typeof value === 'object') {
        return Object.fromEntries(
            Object.entries(value).map(([key, nestedValue]) => [
                toCamelCase(key),
                transformKeysToCamelCase(nestedValue),
            ]),
        );
    }

    return value;
};

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
