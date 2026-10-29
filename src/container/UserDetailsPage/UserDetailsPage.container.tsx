import { useNavigate } from 'react-router-dom';

import { Alert, Box, Stack, Typography } from '@mui/material';

import {
    AppButton,
    UserDetailsCard,
    UserDetailsCardSkeleton,
} from '@components';
import { ROUTES } from '@constant';
import { useFollowUser, useUserDetails } from '@hooks';
import { mapUserDetailsToCardProps } from '@utils';

import { UserDetailsPageContainerProps } from './UserDetailsPage.types';

/**
 * Displays a GitHub profile for the route username or the signed-in user.
 */
const UserDetailsPageContainer = ({
    profileUsername,
}: UserDetailsPageContainerProps) => {
    const navigate = useNavigate();
    const {
        user,
        username,
        memberSince,
        isNotFound,
        isError,
        errorMessage,
        isLoading,
    } = useUserDetails(profileUsername);
    const follow = useFollowUser(user.username);

    if (isNotFound) {
        return (
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                minHeight={{ xs: 'auto', sm: '85vh' }}
                p={{ xs: 2, sm: 3, md: 4 }}
                boxSizing="border-box"
            >
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                    width="100%"
                    textAlign="center"
                    p={3}
                    boxSizing="border-box"
                >
                    <Typography variant="h5">User not found</Typography>

                    <Typography variant="body1" color="text.secondary">
                        {username
                            ? `We couldn't find a GitHub user named "${username}".`
                            : 'The requested GitHub user could not be found.'}
                    </Typography>

                    <AppButton onClick={() => void navigate(ROUTES.HOME)}>
                        Back to home
                    </AppButton>
                </Stack>
            </Box>
        );
    }

    if (isError) {
        return (
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                minHeight={{ xs: 'auto', sm: '85vh' }}
                p={{ xs: 2, sm: 3, md: 4 }}
                boxSizing="border-box"
            >
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                    width="100%"
                    textAlign="center"
                    p={3}
                    boxSizing="border-box"
                >
                    <Alert severity="error">
                        {errorMessage ||
                            'Something went wrong while loading this profile.'}
                    </Alert>

                    <Stack
                        direction="row"
                        gap={2}
                        flexWrap="wrap"
                        justifyContent="center"
                    >
                        <AppButton onClick={user.handleRetry}>
                            Try again
                        </AppButton>

                        <AppButton onClick={() => void navigate(ROUTES.HOME)}>
                            Back to home
                        </AppButton>
                    </Stack>
                </Stack>
            </Box>
        );
    }

    if (isLoading) {
        return (
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                minHeight={{ xs: 'auto', sm: '85vh' }}
                p={{ xs: 2, sm: 3, md: 4 }}
                boxSizing="border-box"
            >
                <UserDetailsCardSkeleton />
            </Box>
        );
    }

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            minHeight={{ xs: 'auto', sm: '85vh' }}
            p={{ xs: 2, sm: 3, md: 4 }}
            boxSizing="border-box"
        >
            <UserDetailsCard
                {...mapUserDetailsToCardProps(user, memberSince)}
                showFollowButton={follow.showFollowButton}
                isFollowing={follow.isFollowing}
                isFollowLoading={follow.isFollowLoading}
                onFollowToggle={() => void follow.handleFollowToggle()}
            />
        </Box>
    );
};

export default UserDetailsPageContainer;
