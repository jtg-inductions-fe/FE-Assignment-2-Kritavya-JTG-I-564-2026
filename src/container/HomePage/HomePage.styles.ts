import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeroSection = styled(Box)(({ theme: { spacing } }) => ({
    width: '100%',
    maxWidth: 1440,
    marginInline: 'auto',
    paddingTop: spacing(4),
}));

export const HeroSearch = styled(Box)(({ theme: { spacing } }) => ({
    width: '100%',
    marginTop: spacing(4),
}));
