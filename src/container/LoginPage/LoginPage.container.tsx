import { Stack } from '@mui/material';

import FlowersAndCloud from '@assets/images/FlowersAndCloud.webp';
import { PageIntro } from '@components';
import { LoginCard } from '@container';
import { usePatLogin } from '@hooks';
import { PageLayout } from '@layouts';

const LoginPageContainer = () => {
    const {
        usernameField,
        tokenField,
        usernameError,
        tokenError,
        showToken,
        isLoading,
        errorMessage,
        patDocsUrl,
        handleToggleShowToken,
        handleSubmit,
        handleContinueWithGitHub,
    } = usePatLogin();

    return (
        <Stack
            component="section"
            direction={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent={{ xs: 'center', md: 'space-between' }}
            gap={4}
            width="100%"
            maxWidth={1536}
            minHeight="85vh"
            mx="auto"
            p={{ xs: 2, sm: 4 }}
            boxSizing="border-box"
        >
            <PageLayout image={FlowersAndCloud} imageAlt="">
                <PageIntro
                    eyebrow="PEOPLE · PROJECTS · CODE"
                    heading={[
                        { text: 'EXPLORE' },
                        { text: 'GITHUB', outlined: true },
                        { text: 'DEEPER.' },
                    ]}
                    description="Search developers, explore their profiles, and discover insights from the GitHub community."
                />
            </PageLayout>

            <LoginCard
                usernameField={usernameField}
                tokenField={tokenField}
                usernameError={usernameError}
                tokenError={tokenError}
                showToken={showToken}
                isLoading={isLoading}
                errorMessage={errorMessage}
                patDocsUrl={patDocsUrl}
                onToggleShowToken={handleToggleShowToken}
                onSubmit={(event) => void handleSubmit(event)}
                onContinueWithGitHub={handleContinueWithGitHub}
            />
        </Stack>
    );
};

export default LoginPageContainer;
