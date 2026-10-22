import { useParams } from 'react-router-dom';

import useUserDetails from './useUserDetails';

/**
 * Provides the route username and formatted profile data for the page.
 *
 * @returns Profile data, loading/error states, and member-since date.
 */
const useUserDetailsPage = () => {
    const { username = '' } = useParams<{ username: string }>();

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
