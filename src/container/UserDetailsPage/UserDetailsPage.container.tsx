import { useNavigate } from 'react-router-dom';

import { Alert, Button, Typography } from '@mui/material';

import { UserDetailsCard } from '@components';
import { ROUTES } from '@constant';
import { useUserDetailsPage } from '@hooks';
import { mapUserDetailsToCardProps } from '@utils';

import {
    DetailsPageContainer,
    MessageContainer,
} from './UserDetailsPage.styles';

const UserDetailsPageContainer = () => {
    const navigate = useNavigate();

    const {
        username,
        user,
        isLoading,
        isNotFound,
        isError,
        errorMessage,
        memberSince,
    } = useUserDetailsPage();

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

    return (
        <DetailsPageContainer>
            <UserDetailsCard
                loading={isLoading}
                {...mapUserDetailsToCardProps(user, memberSince)}
            />
        </DetailsPageContainer>
    );
};

export default UserDetailsPageContainer;
