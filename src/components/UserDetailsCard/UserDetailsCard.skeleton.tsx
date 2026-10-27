import { Skeleton, Stack } from '@mui/material';

import {
    PROFILE_METADATA_SKELETON_COUNT,
    PROFILE_STAT_LABELS,
} from './UserDetailsCard.constants';
import {
    MetadataContent,
    MetadataRow,
    OverFlowTypo,
    ProfileCard,
    ProfileImageContainer,
    ProfileStats,
} from './UserDetailsCard.styles';

const UserDetailsCardSkeleton = () => (
    <ProfileCard>
        <Stack alignItems="center" gap={2} width="100%">
            <ProfileImageContainer>
                <Skeleton variant="circular" width="100%" height="100%" />
            </ProfileImageContainer>

            <Skeleton variant="text" width="75%" height={42} />
            <Skeleton variant="text" width="55%" height={30} />
        </Stack>

        <Stack gap={8} width="100%">
            <Skeleton variant="text" width="90%" height={36} />

            <ProfileStats>
                {PROFILE_STAT_LABELS.map((label) => (
                    <OverFlowTypo key={label} gap={1} minWidth={0}>
                        <Skeleton variant="text" width="55%" height={36} />
                        <Skeleton variant="text" width="85%" height={24} />
                    </OverFlowTypo>
                ))}
            </ProfileStats>

            <Stack gap={5} minWidth={0} width="100%">
                {Array.from(
                    { length: PROFILE_METADATA_SKELETON_COUNT },
                    (_, index) => (
                        <MetadataRow key={index}>
                            <Skeleton
                                variant="circular"
                                width={22}
                                height={22}
                            />

                            <MetadataContent>
                                <Skeleton
                                    variant="text"
                                    width="65%"
                                    height={26}
                                />
                                <Skeleton
                                    variant="text"
                                    width="80%"
                                    height={26}
                                />
                            </MetadataContent>
                        </MetadataRow>
                    ),
                )}
            </Stack>
        </Stack>
    </ProfileCard>
);

export default UserDetailsCardSkeleton;
