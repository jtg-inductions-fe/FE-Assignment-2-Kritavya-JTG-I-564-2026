export interface GitHubUserDetails {
    id: number;
    login: string;
    name: string | null;
    avatar_url: string;
    html_url: string;
    company: string | null;
    location: string | null;
    bio: string | null;
    blog: string | null;
    email: string | null;
    twitter_username: string | null;
    followers: number;
    following: number;
    public_repos: number;
    created_at: string;
    type: string;
}
