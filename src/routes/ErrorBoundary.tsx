import { useNavigate } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import NotFoundIllustration from '@assets/images/404-illustration.webp';
import { AppButton } from '@components';
import { PageIntro, PageLayout } from '@layouts';

const ErrorBoundary = () => {
    const navigate = useNavigate();

    return (
        <PageLayout image={NotFoundIllustration} container={true}>
            <PageIntro
                eyebrow="ERROR"
                heading={[
                    { text: 'SOMETHING WENT' },
                    { text: 'WRONG', outlined: true },
                ]}
                description="Something went wrong. Please try again."
                actions={
                    <AppButton
                        startIcon={<HomeOutlinedIcon />}
                        onClick={() => void navigate('/')}
                    >
                        Back to Home
                    </AppButton>
                }
            />
        </PageLayout>
    );
};

export default ErrorBoundary;
