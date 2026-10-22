import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import XIcon from '@mui/icons-material/X';

import type { UserDetailsCardProps } from '@components/UserDetailsCard/UserDetailsCard.types';

/**
 * Prepares profile information for the user details card.
 *
 * @param props - The GitHub user's profile details.
 * @returns The formatted profile name, bio, statistics, and metadata.
 */
const useUserDetailsCard = ({
    username,
    name,
    bio,
    followers,
    following,
    publicRepos,
    location,
    company,
    blog,
    email,
    twitterUsername,
    memberSince,
    githubUrl,
}: UserDetailsCardProps) => {
    const displayName = name?.trim() || username;
    const displayBio = bio?.trim() || null;
    const website = blog?.trim() || '';
    const emailAddress = email?.trim() || '';
    const twitterHandle = twitterUsername?.trim().replace(/^@/, '') || '';

    const stats = [
        { label: 'Repositories', value: publicRepos },
        { label: 'Followers', value: followers },
        { label: 'Following', value: following },
    ];

    const metadata = [
        {
            label: 'Location',
            value: location?.trim() || 'Not available',
            href: undefined,
            external: false,
            icon: LocationOnOutlinedIcon,
        },
        {
            label: 'Company',
            value: company?.trim() || 'Not available',
            href: undefined,
            external: false,
            icon: BusinessOutlinedIcon,
        },
        {
            label: 'Website',
            value: website || 'Not available',
            href: website || undefined,
            external: true,
            icon: LanguageOutlinedIcon,
        },
        {
            label: 'Email',
            value: emailAddress || 'Not available',
            href: emailAddress ? `mailto:${emailAddress}` : undefined,
            external: false,
            icon: AlternateEmailOutlinedIcon,
        },
        {
            label: 'X',
            value: twitterHandle ? `@${twitterHandle}` : 'Not available',
            href: twitterHandle ? `https://x.com/${twitterHandle}` : undefined,
            external: true,
            icon: XIcon,
        },
        {
            label: 'Member since',
            value: memberSince || 'Not available',
            href: undefined,
            external: false,
            icon: AccessTimeOutlinedIcon,
        },
        {
            label: 'GitHub',
            value: githubUrl ? 'View profile' : 'Not available',
            href: githubUrl || undefined,
            external: true,
            icon: GitHubIcon,
        },
    ];

    return {
        displayName,
        bio: displayBio,
        stats,
        metadata,
    };
};

export default useUserDetailsCard;
