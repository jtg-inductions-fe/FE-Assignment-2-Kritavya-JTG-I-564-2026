import type { HTMLAttributes } from 'react';

import type { AutocompleteProps } from '@mui/material/Autocomplete';

import { AppAutocomplete, UserSearchOption } from '@components';
import type { GitHubUserOption } from '@services';

import UserSearchResultsSkeleton from './UserSearchResults.skeleton';
import type { UserSearchResultsProps } from './UserSearchResults.types';

const UserSearchResults = ({
    inputValue,
    options,
    isLoading,
    isError,
    errorMessage,
    onValueChange,
    onOptionSelect,
    getOptionLabel,
    getOptionDisabled,
    isLoadingOption,
    lastOptionRef,
}: UserSearchResultsProps) => {
    const renderOption: NonNullable<
        AutocompleteProps<GitHubUserOption, false, false, false>['renderOption']
    > = (props, option) => {
        const optionProps = {
            ...props,
        } as HTMLAttributes<HTMLLIElement> & { key?: string };

        delete optionProps.key;

        return (
            <UserSearchOption
                key={option.id}
                option={option}
                optionProps={optionProps}
                loading={isLoadingOption(option)}
                ref={isLoadingOption(option) ? lastOptionRef : undefined}
            />
        );
    };

    return (
        <AppAutocomplete<GitHubUserOption>
            options={options}
            inputValue={inputValue}
            label="Search GitHub users"
            onInputValueChange={onValueChange}
            onOptionSelect={onOptionSelect}
            getOptionLabel={getOptionLabel}
            getOptionDisabled={getOptionDisabled}
            renderOption={renderOption}
            loading={isLoading}
            loadingText={<UserSearchResultsSkeleton />}
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
    );
};

export default UserSearchResults;
