import { useNavigate } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import NotFoundIllustration from '@assets/images/404-illustration.webp';
import { AppButton, DesktopActions, PageIntro } from '@components';
import { PageLayout } from '@layouts';

import { ErrorFallbackProps } from './ErrorFallback.types';

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
                actions={<DesktopActions>{homeButton}</DesktopActions>}
            />
        </PageLayout>
    );
};

export default ErrorFallback;
