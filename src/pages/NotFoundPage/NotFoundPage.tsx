import { useNavigate } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import NotFoundIllustration from '@assets/images/404-illustration.webp';
import { AppButton } from '@components';
import { PageIntro, PageLayout } from '@layouts';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <PageLayout
            image={NotFoundIllustration}
            imageAlt="Illustration representing a page that could not be found"
            container={true}
        >
            <PageIntro
                eyebrow="404 · Page not found"
                heading={[
                    { text: 'OOPS, THIS PAGE' },
                    { text: "DOESN'T EXIST", outlined: true },
                ]}
                description="Looks like this route took a wrong turn. Let's get you back to discovering developers."
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

export default NotFoundPage;
