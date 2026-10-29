import { forwardRef } from 'react';

import { Box, Stack } from '@mui/material';

import UserSearchOptionSkeleton from './UserSearchOption.skeleton';
import { UserSearchOptionAvatar } from './UserSearchOption.styles';
import type { UserSearchOptionProps } from './UserSearchOption.types';

const UserSearchOption = forwardRef<HTMLLIElement, UserSearchOptionProps>(
    ({ option, optionProps, loading = false }, ref) => (
        <Box component="li" {...optionProps} ref={ref}>
            {loading ? (
                <UserSearchOptionSkeleton length={1} />
            ) : (
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    width="100%"
                    minHeight={52}
                    boxSizing="border-box"
                    px={2}
                    py={1}
                >
                    <UserSearchOptionAvatar src={option.avatarUrl} alt="" />
                    {option.username}
                </Stack>
            )}
        </Box>
    ),
);

UserSearchOption.displayName = 'UserSearchOption';

export default UserSearchOption;
