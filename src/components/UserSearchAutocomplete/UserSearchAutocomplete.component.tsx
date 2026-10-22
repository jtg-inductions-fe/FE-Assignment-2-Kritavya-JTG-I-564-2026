import type { CSSProperties, HTMLAttributes, Key } from 'react';

import {
    Autocomplete,
    Avatar,
    Box,
    CircularProgress,
    Skeleton,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import type { AutocompleteInputChangeReason } from '@mui/material/Autocomplete';

import { MIN_QUERY_LENGTH } from '@constant';

import UserSearchAutocompleteSkeleton from './UserDetailsCard.skeleton';
import type {
    SearchOptionItem,
    UserSearchAutocompleteProps,
} from './UserSearchAutocomplete.types';

/**
 * Placeholder option used to reserve space for the next-page loading indicator.
 *
 * The negative ID distinguishes it from actual GitHub users.
 */
const LOADING_OPTION: SearchOptionItem = {
    id: -1,
    username: '__loading__',
    avatarUrl: '',
    userType: '',
};

/**
 * Renders a GitHub user search autocomplete with loading and infinite scrolling.
 *
 * Displays matching users, handles input changes, and forwards selected
 * usernames to the parent component for navigation.
 *
 * @param props - Search input, results, loading states, and event handlers.
 * @returns The GitHub user search autocomplete.
 */
const UserSearchAutocomplete = ({
    value,
    options,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    errorMessage,
    onValueChange,
    onOptionSelect,
    onListScroll,
}: UserSearchAutocompleteProps) => {
    /** Determines whether the search input meets the minimum query length. */
    const isQueryValid = value.trim().length >= MIN_QUERY_LENGTH;

    /** Hides search results when the query is not valid. */
    const visibleOptions = isQueryValid ? options : [];

    /**
     * Adds a placeholder option when another page is available.
     * This keeps space reserved for the next-page loading indicator.
     */
    const listOptions =
        isQueryValid && hasNextPage
            ? [...visibleOptions, LOADING_OPTION]
            : visibleOptions;

    return (
        <Autocomplete
            fullWidth
            forcePopupIcon={false}
            clearOnBlur={false}
            options={listOptions}
            value={null}
            inputValue={value}
            loading={isLoading}
            noOptionsText={
                !isQueryValid
                    ? 'Type to search GitHub users'
                    : errorMessage || 'No GitHub users found'
            }
            filterOptions={(availableOptions) => availableOptions}
            getOptionLabel={({ id, username }) => (id === -1 ? '' : username)}
            getOptionKey={({ id }) => id}
            getOptionDisabled={({ id }) => id === -1}
            isOptionEqualToValue={({ id: optionId }, { id: selectedId }) =>
                optionId === selectedId
            }
            loadingText={<UserSearchAutocompleteSkeleton />}
            slotProps={{
                listbox: {
                    style: {
                        maxHeight: 320,
                        overflowY: 'auto',
                    },
                    onScroll: onListScroll,
                },
                popper: {
                    placement: 'bottom-start',
                },
            }}
            /**
             * Updates the search value only for user input and clearing.
             * Other reasons, such as resetting the input after selection,
             * are intentionally ignored.
             */
            onInputChange={(
                _,
                newValue: string,
                reason: AutocompleteInputChangeReason,
            ) => {
                if (reason === 'input' || reason === 'clear') {
                    onValueChange(newValue);
                }
            }}
            /**
             * Forwards the selected GitHub username to the parent.
             * The loading placeholder must not trigger navigation.
             */
            onChange={(_, selectedOption: SearchOptionItem | null) => {
                if (selectedOption && selectedOption.id !== -1) {
                    onOptionSelect(selectedOption.username);
                }
            }}
            renderOption={(
                props: HTMLAttributes<HTMLLIElement> & { key?: Key },
                option: SearchOptionItem,
            ) => {
                const { id, username, avatarUrl, userType } = option;
                const { key, ...otherProps } = props;

                const incomingStyle = (otherProps.style as CSSProperties) || {};

                // Renders the reserved placeholder for infinite scrolling.
                if (id === -1) {
                    return (
                        <Box
                            key={key}
                            component="li"
                            {...otherProps}
                            style={{
                                ...incomingStyle,
                                height: 64,
                                minHeight: 64,
                                boxSizing: 'border-box',
                                visibility: isFetchingNextPage
                                    ? 'visible'
                                    : 'hidden',
                                pointerEvents: 'none',
                            }}
                        >
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                                width="100%"
                            >
                                <Skeleton
                                    variant="circular"
                                    width={40}
                                    height={40}
                                />

                                <Box flex={1}>
                                    <Skeleton width="60%" />
                                    <Skeleton width="40%" />
                                </Box>

                                {isFetchingNextPage && (
                                    <CircularProgress size={20} />
                                )}
                            </Stack>
                        </Box>
                    );
                }

                // Renders an individual GitHub user result.
                return (
                    <Box
                        key={key}
                        component="li"
                        {...otherProps}
                        style={incomingStyle}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            width="100%"
                        >
                            <Avatar src={avatarUrl} alt={username} />

                            <Box>
                                <Typography variant="body1">
                                    {username}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {userType}
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    fullWidth
                    error={isQueryValid && Boolean(errorMessage)}
                    helperText={isQueryValid ? (errorMessage ?? null) : null}
                    label="Search GitHub username"
                />
            )}
        />
    );
};

export default UserSearchAutocomplete;
