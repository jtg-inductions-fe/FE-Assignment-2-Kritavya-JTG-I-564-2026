import { Skeleton } from '@mui/material';

import {
    PROFILE_METADATA_SKELETON_COUNT,
    PROFILE_STAT_LABELS,
} from './UserDetailsCard.constants';
import {
    MetadataContent,
    MetadataRow,
    ProfileCard,
    ProfileImageContainer,
    ProfileInformation,
    ProfileLeft,
    ProfileMetadata,
    ProfileStat,
    ProfileStats,
} from './UserDetailsCard.styles';

const UserDetailsCardSkeleton = () => (
    <ProfileCard>
        <ProfileLeft>
            <ProfileImageContainer>
                <Skeleton variant="circular" width="100%" height="100%" />
            </ProfileImageContainer>

            <Skeleton variant="text" width="75%" height={42} />
            <Skeleton variant="text" width="55%" height={30} />
        </ProfileLeft>

        <ProfileInformation>
            <Skeleton variant="text" width="90%" height={36} />

            <ProfileStats>
                {PROFILE_STAT_LABELS.map((label) => (
                    <ProfileStat key={label}>
                        <Skeleton variant="text" width="55%" height={36} />
                        <Skeleton variant="text" width="85%" height={24} />
                    </ProfileStat>
                ))}
            </ProfileStats>

            <ProfileMetadata>
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
            </ProfileMetadata>
        </ProfileInformation>
    </ProfileCard>
);

export default UserDetailsCardSkeleton;
