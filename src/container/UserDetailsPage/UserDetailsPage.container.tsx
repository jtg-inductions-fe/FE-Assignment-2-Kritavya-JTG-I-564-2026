import { useNavigate } from 'react-router-dom';

import { Alert, Button, Stack, Typography } from '@mui/material';

import { UserDetailsCard } from '@components';
import { UserDetailsCardSkeleton } from '@components';
import { ROUTES } from '@constant';
import { useUserDetailsPage } from '@hooks';
import { mapUserDetailsToCardProps } from '@utils';

import {
    DetailsPageContainer,
    MessageContainer,
} from './UserDetailsPage.styles';

interface UserDetailsPageContainerProps {
    username?: string;
}

/**
 * Displays a GitHub profile for the route username or the signed-in user.
 */
const UserDetailsPageContainer = ({
    username,
}: UserDetailsPageContainerProps) => {
    const navigate = useNavigate();
    const page = useUserDetailsPage(username);
    const { user } = page;

    if (page.isNotFound) {
        return (
            <DetailsPageContainer>
                <MessageContainer
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                >
                    <Typography variant="h5">User not found</Typography>

                    <Typography variant="body1" color="text.secondary">
                        {page.username
                            ? `We couldn't find a GitHub user named "${page.username}".`
                            : 'The requested GitHub user could not be found.'}
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={() => void navigate(ROUTES.HOME)}
                    >
                        Back to home
                    </Button>
                </MessageContainer>
            </DetailsPageContainer>
        );
    }

    if (page.isError) {
        return (
            <DetailsPageContainer>
                <MessageContainer
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                >
                    <Alert severity="error">
                        {page.errorMessage ||
                            'Something went wrong while loading this profile.'}
                    </Alert>

                    <Stack
                        direction="row"
                        gap={2}
                        flexWrap="wrap"
                        justifyContent="center"
                    >
                        <Button variant="contained" onClick={user.handleRetry}>
                            Try again
                        </Button>

                        <Button
                            variant="outlined"
                            onClick={() => void navigate(ROUTES.HOME)}
                        >
                            Back to home
                        </Button>
                    </Stack>
                </MessageContainer>
            </DetailsPageContainer>
        );
    }

    if (page.isLoading) {
        return (
            <DetailsPageContainer>
                <UserDetailsCardSkeleton />
            </DetailsPageContainer>
        );
    }

    return (
        <DetailsPageContainer>
            <UserDetailsCard
                {...mapUserDetailsToCardProps(user, page.memberSince)}
            />
        </DetailsPageContainer>
    );
};

export default UserDetailsPageContainer;
