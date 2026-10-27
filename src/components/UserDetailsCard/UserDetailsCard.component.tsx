import GitHubIcon from '@mui/icons-material/GitHub';

import { useUserDetailsCard } from '@hooks';

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

/**
 * Displays a GitHub user's profile information and statistics.
 *
 * @param props - The user's profile details and loading state.
 * @returns The profile card or its loading skeleton.
 */
const UserDetailsCard = (props: UserDetailsCardProps) => {
    const { loading = false, avatarUrl, username } = props;

    const { displayName, bio, stats, metadata } = useUserDetailsCard(props);

    if (loading) {
        return <UserDetailsCardSkeleton />;
    }

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

                <ProfileName variant="h3">{displayName}</ProfileName>

                <ProfileUsername variant="h5">@{username}</ProfileUsername>
            </ProfileLeft>

            <ProfileInformation>
                {bio && <ProfileBio variant="h4">{bio}</ProfileBio>}

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
                                    <MetadataLabel variant="h6">
                                        {label}
                                    </MetadataLabel>

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
                                        <MetadataText variant="h6">
                                            {value}
                                        </MetadataText>
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
