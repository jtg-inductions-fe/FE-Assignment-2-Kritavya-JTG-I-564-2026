import FlowersAndCloud from '@assets/images/FlowersAndCloud.webp';
import { AppButton, PageIntro, UserSearchAutocomplete } from '@components';
import { useUserSearch } from '@hooks';
import { PageLayout } from '@layouts';

import { HeroSearch, HeroSection } from './HomePage.styles';

const HomePageContainer = () => {
    const {
        inputValue,
        options,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        isError,
        errorMessage,
        handleValueChange,
        handleOptionSelect,
        handleListScroll,
        handleRetry,
    } = useUserSearch({ syncWithUrl: true });

    return (
        <HeroSection as={'section'}>
            <PageLayout image={FlowersAndCloud} imageAlt="">
                <PageIntro
                    eyebrow="DEVELOPERS · PROJECTS · POSSIBILITIES"
                    heading={[
                        { text: 'FIND YOUR' },
                        { text: 'NEXT GITHUB', outlined: true },
                        { text: 'PROFILE.' },
                    ]}
                    description="Explore developers, discover projects, and learn from the people building the web."
                />

                <HeroSearch>
                    <UserSearchAutocomplete
                        value={inputValue}
                        options={options}
                        isLoading={isLoading}
                        isFetchingNextPage={isFetchingNextPage}
                        hasNextPage={hasNextPage}
                        errorMessage={errorMessage}
                        onValueChange={handleValueChange}
                        onOptionSelect={handleOptionSelect}
                        onListScroll={handleListScroll}
                    />
                </HeroSearch>

                {isError && (
                    <AppButton onClick={handleRetry}>Try again</AppButton>
                )}
            </PageLayout>
        </HeroSection>
    );
};

export default HomePageContainer;
