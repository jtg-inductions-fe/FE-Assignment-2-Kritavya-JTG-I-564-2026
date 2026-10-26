import { Box, Skeleton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const SkeletonRow = styled(Stack)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '32px minmax(0, 1fr)',
    alignItems: 'center',
    columnGap: theme.spacing(2),
    width: '100%',
    minWidth: 0,
    minHeight: 52,
    boxSizing: 'border-box',
    padding: theme.spacing(1, 2),
}));

const SkeletonText = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    minWidth: 0,
});

interface UserSearchOptionSkeletonProps {
    length?: number;
}

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
