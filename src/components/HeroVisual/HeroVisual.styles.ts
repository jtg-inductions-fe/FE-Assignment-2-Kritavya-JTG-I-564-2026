import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const VisualContainer = styled(Box)(({ theme: { breakpoints } }) => ({
    position: 'relative',
    width: '100%',
    minHeight: 340,

    [breakpoints.up('sm')]: {
        minHeight: 420,
    },

    [breakpoints.up('md')]: {
        minHeight: 520,
    },
}));

export const BluePanel = styled(Box)(({ theme: { spacing, palette } }) => ({
    position: 'absolute',
    top: '5%',
    right: 0,
    width: '82%',
    height: '82%',
    overflow: 'hidden',
    borderRadius: spacing(2),
    backgroundColor: palette.primary.dark,
}));

export const BackgroundImage = styled('img')({
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

export const FlowerImage = styled('img')({
    position: 'absolute',
    zIndex: 1,
    display: 'block',
    objectFit: 'contain',
    pointerEvents: 'none',
});

export const FirstFlower = styled(FlowerImage)(
    ({ theme: { breakpoints } }) => ({
        bottom: 0,
        left: 0,
        width: '49%',
        height: '88%',
        objectPosition: 'bottom center',

        [breakpoints.up('md')]: {
            width: '46%',
            height: '96%',
        },
    }),
);

export const SecondFlower = styled(FlowerImage)(
    ({ theme: { breakpoints } }) => ({
        right: '2%',
        bottom: 0,
        width: '47%',
        height: '75%',
        objectPosition: 'bottom center',

        [breakpoints.up('md')]: {
            right: '5%',
            width: '43%',
            height: '84%',
        },
    }),
);

export const OrangePanel = styled(Box)(({ theme: { spacing, palette } }) => ({
    position: 'absolute',
    right: 0,
    bottom: '3%',
    zIndex: 2,
    display: 'flex',
    width: '34%',
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing(2),
    backgroundColor: palette.secondary.main,
    borderRadius: spacing(2),
    color: palette.secondary.contrastText,
    fontSize: '1.1rem',
    fontWeight: 700,
    letterSpacing: '0.2em',
    lineHeight: 1.9,
    textAlign: 'center',
}));
