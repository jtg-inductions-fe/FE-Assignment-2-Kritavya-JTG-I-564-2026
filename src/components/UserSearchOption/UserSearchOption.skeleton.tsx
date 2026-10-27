import { Skeleton, Stack } from '@mui/material';

import { SkeletonRow, SkeletonText } from './UserSearchOption.styles';
import { UserSearchOptionSkeletonProps } from './UserSearchOption.types';

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

                <SkeletonText>
                    <Skeleton variant="text" width={140} height={24} />
                    <Skeleton variant="text" width={80} height={18} />
                </SkeletonText>
            </SkeletonRow>
        ))}
    </Stack>
);

export default UserSearchOptionSkeleton;
