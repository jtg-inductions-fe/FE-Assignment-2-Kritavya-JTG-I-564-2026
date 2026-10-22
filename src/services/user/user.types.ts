export interface GitHubUserDetails {
    id: number;
    login: string;
    name: string | null;
    avatarUrl: string;
    htmlUrl: string;
    company: string | null;
    location: string | null;
    bio: string | null;
    blog: string | null;
    email: string | null;
    twitterUsername: string | null;
    followers: number;
    following: number;
    publicRepos: number;
    createdAt: string;
    type: string;
}
