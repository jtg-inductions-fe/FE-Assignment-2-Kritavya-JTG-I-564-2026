export const SEARCH_PARAMS = {
    QUERY: 'q',
    PAGE: 'page',
} as const;

export const MAX_RESULTS = 1000;
export const USERS_PER_PAGE = 30;
export const MAX_PAGES = Math.ceil(MAX_RESULTS / USERS_PER_PAGE);
export const MIN_QUERY_LENGTH = 1;
export const DEBOUNCE_DELAY = 400;
