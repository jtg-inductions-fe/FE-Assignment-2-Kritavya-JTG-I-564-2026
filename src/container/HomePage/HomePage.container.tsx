import FlowersAndCloud from '@assets/images/FlowersAndCloud.webp';
import { AppButton, PageIntro } from '@components';
import { UserSearchResults } from '@container';
import { useUserSearch, useUserSearchResults } from '@hooks';
import { PageLayout } from '@layouts';

import { HeroSearch, HeroSection } from './HomePage.styles';

const HomePageContainer = () => {
    const {
        inputValue,
        options,
        isDropdownOpen,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        isError,
        errorMessage,
        handleValueChange,
        handleDropdownOpen,
        handleDropdownClose,
        handleOptionSelect,
        handleLoadMore,
        handleRetry,
    } = useUserSearch({ syncWithUrl: true });

    const {
        listOptions,
        getOptionLabel,
        getOptionDisabled,
        isLoadingOption,
        lastOptionRef,
    } = useUserSearchResults({
        options,
        hasNextPage,
        isFetchingNextPage,
        onLoadMore: handleLoadMore,
    });

    return (
        <HeroSection as="section">
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
                    <UserSearchResults
                        inputValue={inputValue}
                        options={listOptions}
                        isLoading={isLoading}
                        isError={isError}
                        errorMessage={errorMessage}
                        isDropdownOpen={isDropdownOpen}
                        onValueChange={handleValueChange}
                        onDropdownOpen={handleDropdownOpen}
                        onDropdownClose={handleDropdownClose}
                        onOptionSelect={handleOptionSelect}
                        getOptionLabel={getOptionLabel}
                        getOptionDisabled={getOptionDisabled}
                        isLoadingOption={isLoadingOption}
                        lastOptionRef={lastOptionRef}
                    />

                    {isError && (
                        <AppButton onClick={handleRetry}>Retry</AppButton>
                    )}
                </HeroSearch>
            </PageLayout>
        </HeroSection>
    );
};

export default HomePageContainer;
