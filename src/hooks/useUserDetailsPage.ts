import { useParams } from 'react-router-dom';

import { useUserDetails } from '@hooks';

const useUserDetailsPage = () => {
    const { username = '' } = useParams<{ username: string }>();

    const user = useUserDetails(username);

    const displayValue = (value: string | null | undefined) =>
        value?.trim() || 'Not available';

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
        displayValue,
    };
};

export default useUserDetailsPage;
