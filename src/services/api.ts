export { baseApi } from './baseApi';

export { searchApi, useSearchUsersInfiniteQuery } from './search';

export type {
    GitHubSearchApiResponse,
    GitHubSearchResponse,
    GitHubUserOption,
    GitHubUserResponse,
} from './search';

export { userApi, useGetUserDetailsQuery } from './user';
export type { GitHubUserDetails } from './user';
