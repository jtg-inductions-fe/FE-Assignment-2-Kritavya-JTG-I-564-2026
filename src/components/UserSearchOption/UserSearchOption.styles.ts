import { Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const UserSearchOptionContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    width: '100%',
    minHeight: 52,
    padding: theme.spacing(1, 2),
}));

export const UserSearchOptionAvatar = styled(Avatar)({
    width: 32,
    height: 32,
    flexShrink: 0,
});
