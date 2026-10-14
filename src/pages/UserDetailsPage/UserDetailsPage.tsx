import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';

import { PageLayout } from '@layouts';

const UserDetailsPage = () => {
    const { username } = useParams();

    return (
        <PageLayout>
            <Typography variant="h4">User Details</Typography>
            <Typography>GitHub username: {username}</Typography>
        </PageLayout>
    );
};

export default UserDetailsPage;
