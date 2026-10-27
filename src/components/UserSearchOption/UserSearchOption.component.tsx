import { forwardRef } from 'react';

import { Box } from '@mui/material';

import UserSearchOptionSkeleton from './UserSearchOption.skeleton';
import {
    UserSearchOptionAvatar,
    UserSearchOptionContainer,
} from './UserSearchOption.styles';
import type { UserSearchOptionProps } from './UserSearchOption.types';

const UserSearchOption = forwardRef<HTMLLIElement, UserSearchOptionProps>(
    ({ option, optionProps, loading = false }, ref) => (
        <Box component="li" {...optionProps} ref={ref}>
            {loading ? (
                <UserSearchOptionSkeleton length={1} />
            ) : (
                <UserSearchOptionContainer>
                    <UserSearchOptionAvatar src={option.avatarUrl} alt="" />
                    {option.username}
                </UserSearchOptionContainer>
            )}
        </Box>
    ),
);

UserSearchOption.displayName = 'UserSearchOption';

export default UserSearchOption;
