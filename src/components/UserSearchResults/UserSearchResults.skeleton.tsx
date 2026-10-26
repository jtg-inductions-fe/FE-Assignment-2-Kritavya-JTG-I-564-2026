import { Box, Skeleton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const SkeletonRow = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(2),
    padding: theme.spacing(1, 2),
}));

const SkeletonAvatar = styled(Skeleton)({
    width: 40,
    height: 40,
    flexShrink: 0,
});

/**
 * Displays placeholder rows while the first search is loading.
 */
const UserSearchResultsSkeleton = () => (
    <Stack>
        {Array.from({ length: 5 }, (_, index) => (
            <SkeletonRow key={index}>
                <SkeletonAvatar variant="circular" />

                <Box flex={1}>
                    <Skeleton variant="text" width="45%" height={24} />
                    <Skeleton variant="text" width="25%" height={20} />
                </Box>
            </SkeletonRow>
        ))}
    </Stack>
);

export default UserSearchResultsSkeleton;
