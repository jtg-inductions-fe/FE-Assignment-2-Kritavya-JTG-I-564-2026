import { useNavigate } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import NotFoundIllustration from '@assets/images/404-illustration.webp';
import { AppButton, DesktopActions, PageIntro } from '@components';
import { PageLayout } from '@layouts';

const NotFoundPage = () => {
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
            container={true}
            mobileActions={homeButton}
        >
            <PageIntro
                eyebrow="404 · Page not found"
                heading={[
                    { text: 'OOPS, THIS PAGE' },
                    { text: "DOESN'T EXIST", outlined: true },
                ]}
                description="Looks like this route took a wrong turn. Let's get you back to discovering developers."
                actions={<DesktopActions>{homeButton}</DesktopActions>}
            />
        </PageLayout>
    );
};

export default NotFoundPage;
