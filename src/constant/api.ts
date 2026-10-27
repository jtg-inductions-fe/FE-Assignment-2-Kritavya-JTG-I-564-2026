export const API_BASE_URL = 'https://api.github.com';

export const API_ENDPOINTS = {
    SEARCH_USERS: '/search/users',
    AUTHENTICATED_USER: '/user',
    USER_DETAILS: (username: string) =>
        `/users/${encodeURIComponent(username)}`,
    USER_FOLLOWING: (username: string) =>
        `/user/following/${encodeURIComponent(username)}`,
} as const;

export const API_HEADERS = {
    ACCEPT: 'application/vnd.github+json',
    VERSION: '2026-03-10',
} as const;

export const API_TIMEOUT = 10000;
