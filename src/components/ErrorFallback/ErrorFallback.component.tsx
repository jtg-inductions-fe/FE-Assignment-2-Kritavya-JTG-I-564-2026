import { useNavigate } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Stack } from '@mui/material';

import NotFoundIllustration from '@assets/images/404-illustration.webp';
import { AppButton, PageIntro } from '@components';
import { PageLayout } from '@layouts';

import type { ErrorFallbackProps } from './ErrorFallback.types';

const ErrorFallback = ({
    message = 'Something went wrong. Please try again.',
}: ErrorFallbackProps) => {
    const navigate = useNavigate();

    const homeButton = (
        <AppButton
            startIcon={<HomeOutlinedIcon />}
            onClick={() => void navigate('/')}
        >
            Back to Home
        </AppButton>
    );

    return (
        <PageLayout
            image={NotFoundIllustration}
            container
            mobileActions={homeButton}
        >
            <PageIntro
                eyebrow="ERROR"
                heading={[
                    { text: 'SOMETHING WENT' },
                    { text: 'WRONG', outlined: true },
                ]}
                description={message}
                actions={
                    <Stack display={{ xs: 'none', sm: 'flex' }}>
                        {homeButton}
                    </Stack>
                }
            />
        </PageLayout>
    );
};

export default ErrorFallback;
