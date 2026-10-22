import { useParams } from 'react-router-dom';

import useUserDetails from './useUserDetails';

/**
 * Provides profile data for the route username or an explicitly supplied username.
 *
 * @param usernameOverride - Optional username for the signed-in profile page.
 * @returns Profile data, loading/error states, and member-since date.
 */
const useUserDetailsPage = (usernameOverride?: string) => {
    const { username: routeUsername } = useParams<{
        username: string;
    }>();

    const username = usernameOverride ?? routeUsername ?? '';
    const user = useUserDetails(username);

    const memberSince = user.createdAt
        ? new Date(user.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              timeZone: 'UTC',
          })
        : 'Not available';

    return {
        username,
        user,
        isLoading: user.isLoading,
        isNotFound: user.isNotFound,
        isError: user.isError,
        errorMessage: user.errorMessage,
        memberSince,
    };
};

export default useUserDetailsPage;
