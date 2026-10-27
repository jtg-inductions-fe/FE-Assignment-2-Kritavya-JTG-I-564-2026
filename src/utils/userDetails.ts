import type { UserDetailsCardProps } from '@components';
import type { GitHubUserDetails } from '@services';

type UserDetailsData = Omit<UserDetailsCardProps, 'loading' | 'memberSince'> & {
    createdAt: string | null;
};

/**
 * Maps GitHub API user details to the application's user details format.
 *
 * @param data - User details returned by the GitHub API.
 * @returns Normalized user details for the application.
 */
export const mapGitHubUserDetails = (
    data: GitHubUserDetails | undefined,
): UserDetailsData => ({
    avatarUrl: data?.avatarUrl ?? '',
    username: data?.login ?? '',
    name: data?.name ?? null,
    bio: data?.bio ?? null,
    company: data?.company ?? null,
    location: data?.location ?? null,
    followers: data?.followers ?? 0,
    following: data?.following ?? 0,
    publicRepos: data?.publicRepos ?? 0,
    githubUrl: data?.htmlUrl ?? '',
    blog: data?.blog ?? null,
    email: data?.email ?? null,
    twitterUsername: data?.twitterUsername ?? null,
    createdAt: data?.createdAt ?? null,
});

/**
 * Maps normalized user details to the props required by UserDetailsCard.
 *
 * @param user - Normalized user details.
 * @param memberSince - Formatted account creation date.
 * @returns Props required by UserDetailsCard.
 */
export const mapUserDetailsToCardProps = (
    user: UserDetailsData,
    memberSince: string,
): Omit<UserDetailsCardProps, 'loading'> => ({
    avatarUrl: user.avatarUrl,
    username: user.username,
    name: user.name,
    bio: user.bio,
    followers: user.followers,
    following: user.following,
    publicRepos: user.publicRepos,
    location: user.location,
    company: user.company,
    blog: user.blog,
    email: user.email,
    twitterUsername: user.twitterUsername,
    githubUrl: user.githubUrl,
    memberSince,
});
