import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import XIcon from '@mui/icons-material/X';

import UserDetailsCardSkeleton from './UserDetailsCard.skeleton';
import {
    AvatarFallback,
    MetadataContent,
    MetadataLabel,
    MetadataLink,
    MetadataRow,
    MetadataText,
    ProfileAvatar,
    ProfileBio,
    ProfileCard,
    ProfileImageContainer,
    ProfileInformation,
    ProfileLeft,
    ProfileMetadata,
    ProfileName,
    ProfileStat,
    ProfileStatLabel,
    ProfileStats,
    ProfileStatValue,
    ProfileUsername,
} from './UserDetailsCard.styles';
import type { UserDetailsCardProps } from './UserDetailsCard.types';

const UserDetailsCard = ({
    loading = false,
    avatarUrl,
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
    if (loading) {
        return <UserDetailsCardSkeleton />;
    }

    const stats = [
        { label: 'Repositories', value: publicRepos },
        { label: 'Followers', value: followers },
        { label: 'Following', value: following },
    ];

    const website = blog?.trim();

    const websiteUrl = website
        ? /^https?:\/\//i.test(website)
            ? website
            : `https://${website}`
        : undefined;

    const twitterHandle = twitterUsername?.trim().replace(/^@/, '');

    const metadata = [
        {
            label: 'Location',
            value: location?.trim() || 'Not available',
            icon: LocationOnOutlinedIcon,
        },
        {
            label: 'Company',
            value: company?.trim() || 'Not available',
            icon: BusinessOutlinedIcon,
        },
        {
            label: 'Website',
            value: website || 'Not available',
            href: websiteUrl,
            external: true,
            icon: LanguageOutlinedIcon,
        },
        {
            label: 'Email',
            value: email?.trim() || 'Not available',
            href: email?.trim() ? `mailto:${email.trim()}` : undefined,
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

    return (
        <ProfileCard>
            <ProfileLeft>
                <ProfileImageContainer>
                    {avatarUrl ? (
                        <ProfileAvatar
                            src={avatarUrl}
                            alt={`${username}'s GitHub avatar`}
                        />
                    ) : (
                        <AvatarFallback>
                            <GitHubIcon fontSize="large" />
                        </AvatarFallback>
                    )}
                </ProfileImageContainer>

                <ProfileName variant="h3">
                    {name?.trim() || username}
                </ProfileName>

                <ProfileUsername variant="h5">@{username}</ProfileUsername>
            </ProfileLeft>

            <ProfileInformation>
                {bio?.trim() && (
                    <ProfileBio variant="h4">{bio.trim()}</ProfileBio>
                )}

                <ProfileStats>
                    {stats.map(({ label, value }) => (
                        <ProfileStat key={label}>
                            <ProfileStatValue variant="h4">
                                {value.toLocaleString('en-US')}
                            </ProfileStatValue>

                            <ProfileStatLabel variant="body1">
                                {label}
                            </ProfileStatLabel>
                        </ProfileStat>
                    ))}
                </ProfileStats>

                <ProfileMetadata>
                    {metadata.map(
                        ({ label, value, href, external, icon: Icon }) => (
                            <MetadataRow key={label}>
                                <Icon fontSize="small" />

                                <MetadataContent>
                                    <MetadataLabel>{label}</MetadataLabel>

                                    {href ? (
                                        <MetadataLink
                                            href={href}
                                            target={
                                                external ? '_blank' : undefined
                                            }
                                            rel={
                                                external
                                                    ? 'noopener noreferrer'
                                                    : undefined
                                            }
                                            underline="hover"
                                            variant="h6"
                                        >
                                            {value}
                                        </MetadataLink>
                                    ) : (
                                        <MetadataText>{value}</MetadataText>
                                    )}
                                </MetadataContent>
                            </MetadataRow>
                        ),
                    )}
                </ProfileMetadata>
            </ProfileInformation>
        </ProfileCard>
    );
};

export default UserDetailsCard;
