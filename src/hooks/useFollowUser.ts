import { useCallback } from 'react';

import {
    useFollowUserMutation,
    useGetFollowingStatusQuery,
    useUnfollowUserMutation,
} from '@services';
import { useAppSelector } from '@store';

const useFollowUser = (targetUsername: string) => {
    const token = useAppSelector((state) => state.auth.token);
    const currentUsername = useAppSelector((state) => state.auth.username);
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );

    const isOwnProfile =
        currentUsername?.toLowerCase() === targetUsername.toLowerCase();

    const canFollow = Boolean(
        isAuthenticated &&
            token &&
            currentUsername &&
            targetUsername &&
            !isOwnProfile,
    );

    const {
        data: isFollowing,
        isLoading: isCheckingStatus,
        isFetching,
        refetch,
    } = useGetFollowingStatusQuery(targetUsername, {
        skip: !canFollow,
    });

    const [followUser, { isLoading: isFollowingUser }] =
        useFollowUserMutation();

    const [unfollowUser, { isLoading: isUnfollowingUser }] =
        useUnfollowUserMutation();

    const handleFollowToggle = useCallback(async () => {
        if (!canFollow) {
            return;
        }

        try {
            if (isFollowing) {
                await unfollowUser(targetUsername).unwrap();
            } else {
                await followUser(targetUsername).unwrap();
            }

            await refetch();
        } catch {
            // API errors are handled by the existing snackbar.
        }
    }, [
        canFollow,
        isFollowing,
        targetUsername,
        followUser,
        unfollowUser,
        refetch,
    ]);

    return {
        showFollowButton: canFollow,
        isFollowing: Boolean(isFollowing),
        isFollowLoading:
            isCheckingStatus ||
            isFetching ||
            isFollowingUser ||
            isUnfollowingUser,
        handleFollowToggle,
    };
};

export default useFollowUser;
