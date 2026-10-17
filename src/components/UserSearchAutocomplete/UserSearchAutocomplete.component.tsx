import type { CSSProperties, HTMLAttributes } from 'react';

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

const LOADING_OPTION: SearchOptionItem = {
    id: -1,
    username: '__loading__',
    avatarUrl: '',
    userType: '',
};

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
    const isQueryValid = value.trim().length >= MIN_QUERY_LENGTH;

    const visibleOptions = isQueryValid ? options : [];

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
            onInputChange={(
                _,
                newValue: string,
                reason: AutocompleteInputChangeReason,
            ) => {
                if (reason === 'input' || reason === 'clear') {
                    onValueChange(newValue);
                }
            }}
            onChange={(_, selectedOption: SearchOptionItem | null) => {
                if (selectedOption && selectedOption.id !== -1) {
                    onOptionSelect(selectedOption.username);
                }
            }}
            ListboxProps={{
                onScroll: onListScroll,
            }}
            renderOption={(
                props: HTMLAttributes<HTMLLIElement> & { key?: React.Key },
                option: SearchOptionItem,
            ) => {
                const { id, username, avatarUrl, userType } = option;
                const { key, ...otherProps } = props;
                const incomingStyle = (otherProps.style as CSSProperties) || {};

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
