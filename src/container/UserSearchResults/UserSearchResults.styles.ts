import { Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const UserOptionContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    minHeight: 52,
    padding: theme.spacing(2),
    cursor: 'pointer',
}));

export const UserOptionAvatar = styled(Avatar)({
    width: 32,
    height: 32,
    flexShrink: 0,
});
