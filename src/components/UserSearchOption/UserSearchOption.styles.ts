import { Avatar, Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const UserSearchOptionContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    width: '100%',
    minHeight: 52,
    boxSizing: 'border-box',
    padding: theme.spacing(1, 2),
}));

export const UserSearchOptionAvatar = styled(Avatar)({
    width: 32,
    height: 32,
    flexShrink: 0,
});

export const SkeletonRow = styled(Stack)(({ theme }) => ({
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

export const SkeletonText = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    minWidth: 0,
});
