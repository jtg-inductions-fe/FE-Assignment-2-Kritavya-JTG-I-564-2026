export interface UserDetailsCardProps {
    loading?: boolean;
    avatarUrl: string;
    username: string;
    name: string | null;
    bio: string | null;
    followers: number;
    following: number;
    publicRepos: number;
    location: string | null;
    company: string | null;
    blog: string | null;
    email: string | null;
    twitterUsername: string | null;
    memberSince: string;
    githubUrl: string;
    showFollowButton?: boolean;
    isFollowing?: boolean;
    isFollowLoading?: boolean;
    onFollowToggle?: () => void;
}
