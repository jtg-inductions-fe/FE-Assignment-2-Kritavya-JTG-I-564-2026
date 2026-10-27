import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ProfileCard = styled(Box)(
    ({ theme: { spacing, palette, shape, breakpoints } }) => ({
        display: 'grid',
        gridTemplateColumns: '300px minmax(0, 1fr)',
        alignItems: 'start',
        gap: spacing(10),
        width: '100%',
        maxWidth: 1400,
        marginInline: 'auto',
        padding: spacing(7),
        border: `1px solid ${palette.divider}`,
        borderRadius: shape.borderRadius * 2,
        backgroundColor: palette.background.paper,

        [breakpoints.down('md')]: {
            gridTemplateColumns: '240px minmax(0, 1fr)',
            gap: spacing(7),
            padding: spacing(4),
        },

        [breakpoints.down('sm')]: {
            gridTemplateColumns: 'minmax(0, 1fr)',
            justifyItems: 'center',
            gap: spacing(5),
            padding: spacing(3),
        },
    }),
);

export const ProfileImageContainer = styled(Box)(({ theme: { palette } }) => ({
    width: '100%',
    maxWidth: 280,
    aspectRatio: '1 / 1',
    overflow: 'hidden',
    borderRadius: '50%',
    backgroundColor: palette.action.hover,
}));

export const ProfileAvatar = styled('img')({
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
});

export const ProfileStats = styled(Box)(({ theme: { spacing } }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: spacing(10),
    width: '100%',
}));

export const MetadataRow = styled(Box)(({ theme: { spacing } }) => ({
    display: 'grid',
    gridTemplateColumns: '22px minmax(0, 1fr)',
    alignItems: 'start',
    columnGap: spacing(2),
    minWidth: 0,
}));

export const MetadataContent = styled(Box)(
    ({ theme: { spacing, breakpoints } }) => ({
        display: 'grid',
        gridTemplateColumns: '190px minmax(0, 1fr)',
        alignItems: 'baseline',
        columnGap: spacing(3),
        minWidth: 0,

        [breakpoints.down('md')]: {
            gridTemplateColumns: '145px minmax(0, 1fr)',
            columnGap: spacing(2),
        },

        [breakpoints.down('sm')]: {
            gridTemplateColumns: '120px minmax(0, 1fr)',
            columnGap: spacing(1.5),
        },
    }),
);

export const OverFlowTypo = styled(Typography)({
    overflowWrap: 'anywhere',
});
