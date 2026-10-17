import { useNavigate } from 'react-router-dom';

import { Alert, Button, Typography } from '@mui/material';

import { UserDetailsCard } from '@components';
import { useUserDetailsPage } from '@hooks';

import {
    DetailsPageContainer,
    MessageContainer,
} from './UserDetailsLayout.styles';

const UserDetailsLayout = () => {
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
                <MessageContainer>
                    <Typography variant="h5">User not found</Typography>

                    <Typography variant="body1" color="text.secondary">
                        {username
                            ? `We couldn't find a GitHub user named "${username}".`
                            : 'The requested GitHub user could not be found.'}
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={() => void navigate('/')}
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
                <MessageContainer>
                    <Alert severity="error">
                        {errorMessage ||
                            'Something went wrong while loading this profile.'}
                    </Alert>

                    <Button
                        variant="contained"
                        onClick={() => void navigate('/')}
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
                avatarUrl={user.avatarUrl}
                username={user.username}
                name={user.name}
                bio={user.bio}
                followers={user.followers}
                following={user.following}
                publicRepos={user.publicRepos}
                location={user.location}
                company={user.company}
                blog={user.blog}
                email={user.email}
                twitterUsername={user.twitterUsername}
                memberSince={memberSince}
                githubUrl={user.githubUrl}
            />
        </DetailsPageContainer>
    );
};

export default UserDetailsLayout;
