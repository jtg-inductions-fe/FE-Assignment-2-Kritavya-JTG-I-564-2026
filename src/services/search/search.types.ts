/**
 * A GitHub user returned by the search API.
 */
export interface GitHubUserResponse {
    id: number;
    login: string;
    avatarUrl: string;
    htmlUrl: string;
    type: string;
}

/**
 * A GitHub user in the format used by the UI.
 */
export interface GitHubUserOption {
    id: number;
    username: string;
    avatarUrl: string;
    userType: string;
}

/**
 * Response from GitHub's user search endpoint.
 */
export interface GitHubSearchApiResponse {
    totalCount: number;
    incompleteResults: boolean;
    items: GitHubUserResponse[];
}

/**
 * Search response after converting users for the UI.
 */
export interface GitHubSearchResponse {
    totalCount: number;
    incompleteResults: boolean;
    items: GitHubUserOption[];
}
