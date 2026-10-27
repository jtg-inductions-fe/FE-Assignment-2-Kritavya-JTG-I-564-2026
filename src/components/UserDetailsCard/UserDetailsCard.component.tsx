import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Link, Stack, Typography } from '@mui/material';

import { useUserDetailsCard } from '@hooks';

import {
    MetadataContent,
    MetadataRow,
    OverFlowTypo,
    ProfileAvatar,
    ProfileCard,
    ProfileImageContainer,
    ProfileStats,
} from './UserDetailsCard.styles';
import type { UserDetailsCardProps } from './UserDetailsCard.types';

/**
 * Displays a GitHub user's profile information and statistics.
 *
 * @param props - The user's profile details and loading state.
 * @returns The profile card or its loading skeleton.
 */
const UserDetailsCard = (props: UserDetailsCardProps) => {
    const { avatarUrl, username } = props;
    const { displayName, bio, stats, metadata } = useUserDetailsCard(props);

    return (
        <ProfileCard>
            <Stack alignItems="center" gap={2} width="100%">
                <ProfileImageContainer>
                    {avatarUrl ? (
                        <ProfileAvatar
                            src={avatarUrl}
                            alt={`${username}'s GitHub avatar`}
                        />
                    ) : (
                        <Stack
                            alignItems={'center'}
                            justifyContent={'center'}
                            width={'100%'}
                            height={'100%'}
                        >
                            <GitHubIcon fontSize="large" />
                        </Stack>
                    )}
                </ProfileImageContainer>

                <OverFlowTypo
                    variant="h3"
                    color="text.secondary"
                    mt={1}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    {displayName}
                </OverFlowTypo>
                <OverFlowTypo
                    variant="h5"
                    color="text.secondary"
                    textAlign={'center'}
                >
                    @{username}
                </OverFlowTypo>
            </Stack>

            <Stack gap={8} width="100%">
                {bio && (
                    <OverFlowTypo variant="h4" mb={1}>
                        {bio}
                    </OverFlowTypo>
                )}

                <ProfileStats>
                    {stats.map(({ label, value }) => (
                        <Box
                            key={label}
                            display="flex"
                            flexDirection="column"
                            gap={1}
                            minWidth={0}
                        >
                            <OverFlowTypo variant="h4" fontWeight={'bold'}>
                                {value.toLocaleString('en-US')}
                            </OverFlowTypo>
                            <Typography variant="body1" color="text.secondary">
                                {label}
                            </Typography>
                        </Box>
                    ))}
                </ProfileStats>

                <Stack gap={5} minWidth={0} width="100%">
                    {metadata.map(
                        ({ label, value, href, external, icon: Icon }) => (
                            <MetadataRow key={label}>
                                <Icon fontSize="small" />
                                <MetadataContent>
                                    <Typography variant="h6" fontWeight="bold">
                                        {label}
                                    </Typography>
                                    {href ? (
                                        <Link
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
                                        </Link>
                                    ) : (
                                        <OverFlowTypo
                                            variant="h6"
                                            color="text.secondary"
                                            minWidth={0}
                                        >
                                            {value}
                                        </OverFlowTypo>
                                    )}
                                </MetadataContent>
                            </MetadataRow>
                        ),
                    )}
                </Stack>
            </Stack>
        </ProfileCard>
    );
};

export default UserDetailsCard;
