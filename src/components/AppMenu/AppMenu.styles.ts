import { MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledMenuItem = styled(MenuItem)(({ theme: { spacing } }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: spacing(1.5),
}));
