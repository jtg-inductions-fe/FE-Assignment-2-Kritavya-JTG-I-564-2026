import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPageLayout = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'container',
})<{ container?: boolean }>(
    ({ theme: { breakpoints, spacing }, container = false }) => ({
        width: '100%',
        maxWidth: breakpoints.values.xl,
        marginInline: 'auto',
        paddingBlock: spacing(8),
        paddingInline: spacing(6),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        [breakpoints.down('md')]: {
            paddingInline: spacing(4),
        },

        [breakpoints.down('sm')]: {
            paddingBlock: spacing(6),
            paddingInline: spacing(3),
        },

        ...(container && {
            paddingTop: spacing(15),

            [breakpoints.up('sm')]: {
                paddingTop: 0,
                minHeight: '85vh',
            },
        }),
    }),
);

export const PageContentStack = styled(Stack)(
    ({ theme: { breakpoints, spacing } }) => ({
        width: '100%',
        alignItems: 'center',
        gap: spacing(6),

        [breakpoints.up('sm')]: {
            flexDirection: 'row',
            gap: spacing(2),
        },

        [breakpoints.up('md')]: {
            gap: spacing(6),
        },
    }),
);

export const PageContentContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'hasAsideContent',
})<{ hasAsideContent: boolean }>(({ hasAsideContent }) => ({
    width: '100%',
    maxWidth: hasAsideContent ? 'none' : 960,
    flex: hasAsideContent ? '1 1 55%' : '1 1 auto',
    minWidth: 0,
}));

export const PageAsideContainer = styled(Box)(({ theme: { breakpoints } }) => ({
    flex: '1 1 45%',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    [breakpoints.up('sm')]: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
}));

export const PageIllustration = styled('img')(({ theme: { breakpoints } }) => ({
    display: 'block',
    width: '100%',
    maxWidth: 420,
    maxHeight: 360,
    objectFit: 'contain',

    [breakpoints.up('sm')]: {
        maxWidth: 520,
        maxHeight: 440,
        objectPosition: 'right center',
    },

    [breakpoints.up('md')]: {
        maxWidth: 600,
        maxHeight: 560,
    },
}));

export const MobileActions = styled(Box)(
    ({ theme: { breakpoints, spacing } }) => ({
        display: 'none',

        [breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginTop: spacing(10),
        },
    }),
);
