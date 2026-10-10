import type { Components } from '@mui/material/styles';

// Local Font files
import Azonix from '@assets/fonts/azonix/AzonixRegular.woff2';
import Inter300 from '@assets/fonts/inter/inter-300.woff2';
import Inter500 from '@assets/fonts/inter/inter-500.woff2';
import Inter600 from '@assets/fonts/inter/inter-600.woff2';
import Inter700 from '@assets/fonts/inter/inter-700.woff2';
import InterRegular from '@assets/fonts/inter/inter-regular.woff2';

// TODO: Add necessary font face declarations here
const fontFaceDeclarations = `
    @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        src: url(${Inter300}) format('woff2');
    }
    @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url(${InterRegular}) format('woff2');
    }
    @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url(${Inter500}) format('woff2');
    }
    @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        src: url(${Inter600}) format('woff2');
    }
    @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        src: url(${Inter700}) format('woff2');
    }
    @font-face {
        font-display: swap; 
        font-family: 'Azonix';
        font-style: normal;
        font-weight: 700;
        src: url(${Azonix}) format('woff2');
    }
    `;

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                fontSize: '62.5%',
            },
            fontFaceDeclarations,
        },
    },
};
