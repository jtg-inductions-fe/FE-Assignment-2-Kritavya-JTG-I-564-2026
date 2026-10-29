import { Skeleton, Stack } from '@mui/material';

import { SkeletonRow } from './UserSearchOption.styles';
import type { UserSearchOptionSkeletonProps } from './UserSearchOption.types';

/**
 * Displays skeleton rows matching the user search option layout.
 */
const UserSearchOptionSkeleton = ({
    length = 5,
}: UserSearchOptionSkeletonProps) => (
    <Stack width="100%">
        {Array.from({ length }, (_, index) => (
            <SkeletonRow key={index}>
                <Skeleton variant="circular" width={32} height={32} />

                <Stack width="100%" minWidth={0} justifyContent="center">
                    <Skeleton variant="text" width={140} height={24} />
                    <Skeleton variant="text" width={80} height={18} />
                </Stack>
            </SkeletonRow>
        ))}
    </Stack>
);

export default UserSearchOptionSkeleton;
