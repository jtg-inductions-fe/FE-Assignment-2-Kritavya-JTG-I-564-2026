export interface GitHubUser {
    login: string;
    id: number;
    avatarUrl: string;
    htmlUrl: string;
    type: string;
}

export interface GitHubSearchResponse {
    totalCount: number;
    incompleteResults: boolean;
    items: GitHubUser[];
}
