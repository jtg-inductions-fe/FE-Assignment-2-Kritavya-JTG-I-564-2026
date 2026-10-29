import type { HTMLAttributes } from 'react';

import { Box } from '@mui/material';
import type { AutocompleteProps } from '@mui/material/Autocomplete';

import FlowersAndCloud from '@assets/images/FlowersAndCloud.webp';
import {
    AppAutocomplete,
    AppButton,
    PageIntro,
    UserSearchOption,
    UserSearchOptionSkeleton,
} from '@components';
import { useUserSearch, useUserSearchResults } from '@hooks';
import { PageLayout } from '@layouts';
import type { GitHubUserOption } from '@services';

const HomePageContainer = () => {
    const {
        inputValue,
        options,
        isDropdownOpen,
        isLoading,
        isFetching,
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
        isFetching,
        onLoadMore: handleLoadMore,
    });

    const renderOption: NonNullable<
        AutocompleteProps<GitHubUserOption, false, false, false>['renderOption']
    > = (props, option) => {
        const optionProps = {
            ...props,
        } as HTMLAttributes<HTMLLIElement> & { key?: string };

        delete optionProps.key;

        const loading = isLoadingOption(option);

        return (
            <UserSearchOption
                key={option.id}
                option={option}
                optionProps={optionProps}
                loading={loading}
                ref={loading ? lastOptionRef : undefined}
            />
        );
    };

    return (
        <Box component="section" width="100%" maxWidth={1440} mx="auto" pt={4}>
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

                <Box width="100%" mt={4}>
                    <AppAutocomplete<GitHubUserOption>
                        options={listOptions}
                        inputValue={inputValue}
                        label="Search GitHub users"
                        open={isDropdownOpen}
                        onOpen={handleDropdownOpen}
                        onClose={handleDropdownClose}
                        onInputValueChange={handleValueChange}
                        onOptionSelect={handleOptionSelect}
                        getOptionLabel={getOptionLabel}
                        getOptionDisabled={getOptionDisabled}
                        renderOption={renderOption}
                        loading={isLoading}
                        loadingText={<UserSearchOptionSkeleton length={5} />}
                        noOptionsText={
                            isError
                                ? (errorMessage ?? 'Could not load users.')
                                : inputValue.trim()
                                  ? 'No GitHub users found'
                                  : 'Type to search GitHub users'
                        }
                        error={isError}
                        helperText={isError ? errorMessage : undefined}
                    />

                    {isError && (
                        <AppButton onClick={handleRetry}>Retry</AppButton>
                    )}
                </Box>
            </PageLayout>
        </Box>
    );
};

export default HomePageContainer;
