import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const StyledAppButton = styled(Button)(
    ({ theme: { spacing, palette } }) => ({
        borderRadius: spacing(3),
        paddingInline: spacing(6),
        paddingBlock: spacing(2.5),
        textTransform: 'none',

        '&.MuiButton-contained': {
            backgroundColor: palette.primary.dark,

            '&:hover': {
                backgroundColor: palette.primary.main,
            },
        },
    }),
);
