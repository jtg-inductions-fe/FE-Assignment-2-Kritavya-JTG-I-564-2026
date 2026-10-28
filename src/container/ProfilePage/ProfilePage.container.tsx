import { UserDetailsPageContainer } from '@container';
import { useAppSelector } from '@store';

/**
 * Displays the signed-in user's GitHub profile.
 */
const ProfilePageContainer = () => {
    const username = useAppSelector((state) => state.auth.username);

    return <UserDetailsPageContainer profileUsername={username ?? ''} />;
};

export default ProfilePageContainer;
