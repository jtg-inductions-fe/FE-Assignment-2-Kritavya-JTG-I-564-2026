import { API_ENDPOINTS, MAX_PAGES, USERS_PER_PAGE } from '@constant';
import { baseApi } from '@services';

import type { GitHubSearchResponse } from './search.types';

export const searchApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        searchUsers: builder.infiniteQuery<
            GitHubSearchResponse,
            string,
            number
        >({
            query: ({ queryArg, pageParam }) => ({
                url: API_ENDPOINTS.SEARCH_USERS,
                params: {
                    q: queryArg,
                    page: pageParam,
                    per_page: USERS_PER_PAGE,
                },
            }),

            infiniteQueryOptions: {
                initialPageParam: 1,

                getNextPageParam: (lastPage, _allPages, lastPageParam) => {
                    const totalPages = Math.min(
                        Math.ceil(lastPage.total_count / USERS_PER_PAGE),
                        MAX_PAGES,
                    );

                    if (
                        lastPage.items.length === 0 ||
                        lastPageParam >= totalPages
                    ) {
                        return undefined;
                    }

                    return lastPageParam + 1;
                },
            },
        }),
    }),
});

export const { useSearchUsersInfiniteQuery } = searchApi;
