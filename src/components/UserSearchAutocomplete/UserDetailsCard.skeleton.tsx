import { Box, Skeleton, Stack } from '@mui/material';

const UserSearchAutocompleteSkeleton = () => (
    <Stack spacing={2} padding={1}>
        {Array.from({ length: 5 }, (_, index) => (
            <Stack
                key={index}
                direction="row"
                alignItems="center"
                spacing={2}
                paddingY={0.5}
            >
                <Skeleton variant="circular" width={40} height={40} />

                <Box flex={1}>
                    <Skeleton variant="text" width="45%" height={24} />
                    <Skeleton variant="text" width="25%" height={20} />
                </Box>
            </Stack>
        ))}
    </Stack>
);

export default UserSearchAutocompleteSkeleton;
