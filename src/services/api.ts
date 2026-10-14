import { API_BASE_URL } from '@constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('Accept', 'application/vnd.github+json');
            headers.set('X-GitHub-Api-Version', '2026-03-10');

            return headers;
        },
    }),
    endpoints: () => ({}),
});
