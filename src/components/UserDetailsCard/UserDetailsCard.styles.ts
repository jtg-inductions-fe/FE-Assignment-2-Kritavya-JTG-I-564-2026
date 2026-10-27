import { Box, Link, Skeleton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ProfileCard = styled(Box)(
    ({ theme: { spacing, palette, shape, breakpoints } }) => ({
        display: 'grid',
        gridTemplateColumns: '300px minmax(0, 1fr)',
        alignItems: 'start',
        gap: spacing(7),
        width: '100%',
        maxWidth: 1400,
        marginInline: 'auto',
        padding: spacing(7),
        border: `1px solid ${palette.divider}`,
        borderRadius: shape.borderRadius * 2,
        backgroundColor: palette.background.paper,

        [breakpoints.down('md')]: {
            gridTemplateColumns: '240px minmax(0, 1fr)',
            gap: spacing(5),
            padding: spacing(4),
        },

        [breakpoints.down('sm')]: {
            gridTemplateColumns: 'minmax(0, 1fr)',
            justifyItems: 'center',
            gap: spacing(4),
            padding: spacing(3),
        },
    }),
);

export const ProfileLeft = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing(2),
    minWidth: 0,
}));

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

export const AvatarFallback = styled(Box)(({ theme: { palette } }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    color: palette.text.secondary,
}));

export const ProfileName = styled(Typography)(
    ({ theme: { spacing, typography } }) => ({
        ...typography.h3,
        marginTop: spacing(1),
        fontWeight: typography.fontWeightBold,
        textAlign: 'center',
        overflowWrap: 'anywhere',
    }),
);

export const ProfileUsername = styled(Typography)(
    ({ theme: { typography, palette } }) => ({
        ...typography.h5,
        color: palette.text.secondary,
        textAlign: 'center',
        overflowWrap: 'anywhere',
    }),
);

export const ProfileInformation = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(3),
    minWidth: 0,
    width: '100%',
}));

export const ProfileBio = styled(Typography)(
    ({ theme: { spacing, typography, palette } }) => ({
        ...typography.h4,
        marginBottom: spacing(1),
        color: palette.text.primary,
        overflowWrap: 'anywhere',
    }),
);

export const ProfileStats = styled(Box)(
    ({ theme: { spacing, palette, breakpoints } }) => ({
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: spacing(3),
        paddingBlock: spacing(3),
        borderBottom: `1px solid ${palette.divider}`,

        [breakpoints.down('sm')]: {
            gap: spacing(1.5),
        },
    }),
);

export const ProfileStat = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: spacing(1),
    minWidth: 0,
}));

export const ProfileStatValue = styled(Typography)(
    ({ theme: { typography } }) => ({
        ...typography.h4,
        fontWeight: typography.fontWeightBold,
        overflowWrap: 'anywhere',
    }),
);

export const ProfileStatLabel = styled(Typography)(
    ({ theme: { typography, palette } }) => ({
        ...typography.body1,
        color: palette.text.secondary,
    }),
);

export const ProfileMetadata = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(4),
    marginTop: spacing(2),
}));

export const MetadataRow = styled(Box)(
    ({ theme: { spacing, palette, typography } }) => ({
        display: 'grid',
        gridTemplateColumns: '32px minmax(0, 1fr)',
        alignItems: 'start',
        columnGap: spacing(2),
        color: palette.text.secondary,
        ...typography.h6,

        '& > svg': {
            width: '1.3em',
            height: '1.3em',
            marginTop: '0.1em',
            flexShrink: 0,
        },
    }),
);

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

        [breakpoints.down(360)]: {
            gridTemplateColumns: 'minmax(0, 1fr)',
            rowGap: spacing(0.5),
        },
    }),
);

export const MetadataLabel = styled(Typography)(
    ({ theme: { palette, typography } }) => ({
        color: palette.text.primary,
        fontWeight: typography.fontWeightBold,
    }),
);

export const MetadataText = styled(Typography)(({ theme: { palette } }) => ({
    color: palette.text.secondary,
    overflowWrap: 'anywhere',
}));

export const MetadataLink = styled(Link)(({ theme: { typography } }) => ({
    ...typography.h6,
    minWidth: 0,
    overflowWrap: 'anywhere',
}));

// Skeleton styles

export const SkeletonAvatar = styled(Skeleton)({
    display: 'block',
    width: '100%',
    height: '100%',
    transform: 'none',
    borderRadius: '50%',
});

export const SkeletonLine = styled(Skeleton)({
    transform: 'none',
});

export const SkeletonStatLine = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: spacing(1),
    width: '100%',
}));

export const SkeletonMetadataRow = styled(Box)(({ theme: { spacing } }) => ({
    display: 'grid',
    gridTemplateColumns: '32px minmax(0, 1fr)',
    alignItems: 'start',
    columnGap: spacing(2),
}));
