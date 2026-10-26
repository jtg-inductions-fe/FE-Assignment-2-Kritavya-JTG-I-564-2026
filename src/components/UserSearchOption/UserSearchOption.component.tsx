import { forwardRef } from 'react';

import { Box, CircularProgress } from '@mui/material';

import {
    UserSearchOptionAvatar,
    UserSearchOptionContainer,
} from './UserSearchOption.styles';
import type { UserSearchOptionProps } from './UserSearchOption.types';

const UserSearchOption = forwardRef<HTMLLIElement, UserSearchOptionProps>(
    ({ option, optionProps, loading = false }, ref) => (
        <Box component="li" {...optionProps} ref={ref}>
            <UserSearchOptionContainer>
                {loading ? (
                    <CircularProgress size={20} />
                ) : (
                    <>
                        <UserSearchOptionAvatar src={option.avatarUrl} alt="" />
                        {option.username}
                    </>
                )}
            </UserSearchOptionContainer>
        </Box>
    ),
);

UserSearchOption.displayName = 'UserSearchOption';

export default UserSearchOption;
