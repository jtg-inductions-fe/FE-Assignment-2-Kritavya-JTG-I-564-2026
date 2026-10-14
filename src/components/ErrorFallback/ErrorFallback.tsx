import { useNavigate } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import NotFoundIllustration from '@assets/images/404-illustration.webp';
import { AppButton } from '@components';
import { PageIntro, PageLayout } from '@layouts';

interface ErrorFallbackProps {
    message?: string;
}

const ErrorFallback = ({
    message = 'Something went wrong. Please try again.',
}: ErrorFallbackProps) => {
    const navigate = useNavigate();

    return (
        <PageLayout image={NotFoundIllustration} container>
            <PageIntro
                eyebrow="ERROR"
                heading={[
                    { text: 'SOMETHING WENT' },
                    { text: 'WRONG', outlined: true },
                ]}
                description={message}
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

export default ErrorFallback;
