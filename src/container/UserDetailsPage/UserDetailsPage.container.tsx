import { useNavigate } from 'react-router-dom';

import { Alert, Stack, Typography } from '@mui/material';

import {
    AppButton,
    UserDetailsCard,
    UserDetailsCardSkeleton,
} from '@components';
import { ROUTES } from '@constant';
import { useFollowUser, useUserDetails } from '@hooks';
import { mapUserDetailsToCardProps } from '@utils';

import {
    DetailsPageContainer,
    MessageContainer,
} from './UserDetailsPage.styles';
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
            <DetailsPageContainer>
                <MessageContainer
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
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
                </MessageContainer>
            </DetailsPageContainer>
        );
    }

    if (isError) {
        return (
            <DetailsPageContainer>
                <MessageContainer
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
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
                </MessageContainer>
            </DetailsPageContainer>
        );
    }

    if (isLoading) {
        return (
            <DetailsPageContainer>
                <UserDetailsCardSkeleton />
            </DetailsPageContainer>
        );
    }

    return (
        <DetailsPageContainer>
            <UserDetailsCard
                {...mapUserDetailsToCardProps(user, memberSince)}
                showFollowButton={follow.showFollowButton}
                isFollowing={follow.isFollowing}
                isFollowLoading={follow.isFollowLoading}
                onFollowToggle={() => void follow.handleFollowToggle()}
            />
        </DetailsPageContainer>
    );
};

export default UserDetailsPageContainer;
