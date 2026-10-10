import { Box, Typography } from '@mui/material';
import { theme } from '@theme';

const HomePage = () => (
    <Box component={'section'} sx={{ p: theme.spacing(2) }}>
        <Typography variant="h6">This is the Hero section</Typography>
    </Box>
);

export default HomePage;
