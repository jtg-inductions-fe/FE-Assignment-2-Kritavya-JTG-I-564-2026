import { useUserDetailsPage } from '@hooks';
import { UserDetailsLayout } from '@layouts';

const UserDetailsPage = () => {
    const page = useUserDetailsPage();

    return <UserDetailsLayout {...page} />;
};

export default UserDetailsPage;
