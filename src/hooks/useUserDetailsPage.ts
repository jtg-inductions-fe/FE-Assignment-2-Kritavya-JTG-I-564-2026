import { useParams } from 'react-router-dom';

import { formatMemberSince } from '@utils';

import useUserDetails from './useUserDetails';

/**
 * Provides the route username and formatted profile data for the page.
 *
 * @returns Profile data, loading/error states, and member-since date.
 */
const useUserDetailsPage = () => {
    const { username = '' } = useParams<{ username: string }>();

    const user = useUserDetails(username);
    const memberSince = formatMemberSince(user.createdAt);

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
