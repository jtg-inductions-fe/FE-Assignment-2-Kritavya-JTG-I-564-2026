import { API_ENDPOINTS, MAX_PAGES, USERS_PER_PAGE } from '@constant';
import { baseApi } from '@services';

import type { GitHubSearchResponse } from './search.types';

/**
 * Injects GitHub user search endpoints into the shared base API.
 *
 * Supports paginated user search using RTK Query's infinite query.
 */
export const searchApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        /**
         * Searches GitHub users and fetches results page by page.
         *
         * The search query is passed as the query argument, while the page
         * parameter determines which set of results the API returns.
         */
        searchUsers: builder.infiniteQuery<
            GitHubSearchResponse,
            string,
            number
        >({
            /**
             * Builds the API request for the current search query and page.
             *
             * @param queryArg - The search term entered by the user.
             * @param pageParam - The page number to fetch.
             * @returns The request URL and its query parameters.
             */
            query: ({ queryArg, pageParam }) => ({
                url: API_ENDPOINTS.SEARCH_USERS,
                params: {
                    q: queryArg,
                    page: pageParam,
                    per_page: USERS_PER_PAGE,
                },
            }),

            infiniteQueryOptions: {
                /** Starts every new infinite query from the first page. */
                initialPageParam: 1,

                /**
                 * Determines whether another page should be fetched.
                 *
                 * Limits pagination to MAX_PAGES and stops when the last
                 * response contains no results or the page limit is reached.
                 *
                 * @param lastPage - The most recently fetched API response.
                 * @param _allPages - All pages fetched for the current query.
                 * @param lastPageParam - The page number of the last response.
                 * @returns The next page number, or undefined when pagination ends.
                 */
                getNextPageParam: (lastPage, _allPages, lastPageParam) => {
                    const totalPages = Math.min(
                        Math.ceil(lastPage.totalCount / USERS_PER_PAGE),
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

/** Hook used by components and custom hooks to search GitHub users infinitely. */
export const { useSearchUsersInfiniteQuery } = searchApi;
