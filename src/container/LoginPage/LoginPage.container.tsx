import FlowersAndCloud from '@assets/images/FlowersAndCloud.webp';
import { LoginCard, PageIntro } from '@components';
import { usePatLogin } from '@hooks';
import { PageLayout } from '@layouts';

import { LoginSection } from './LoginPage.styles';

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
        handleUsernameChange,
        handleTokenChange,
        handleToggleShowToken,
        handleSubmit,
        handleContinueWithGitHub,
    } = usePatLogin();

    return (
        <LoginSection as="section">
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
                onUsernameChange={handleUsernameChange}
                onTokenChange={handleTokenChange}
                onToggleShowToken={handleToggleShowToken}
                onSubmit={(event) => void handleSubmit(event)}
                onContinueWithGitHub={handleContinueWithGitHub}
            />
        </LoginSection>
    );
};

export default LoginPageContainer;
