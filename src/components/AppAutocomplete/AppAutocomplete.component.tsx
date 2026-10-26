import { useCallback } from 'react';

import type { SyntheticEvent } from 'react';

import { Autocomplete, TextField } from '@mui/material';
import type { AutocompleteInputChangeReason } from '@mui/material/Autocomplete';

import type { AppAutocompleteProps } from './AppAutocomplete.types';

const AppAutocomplete = <T,>({
    options,
    inputValue,
    label,
    onInputValueChange,
    onOptionSelect,
    getOptionLabel,
    renderOption,
    getOptionDisabled,
    loading = false,
    loadingText,
    noOptionsText = 'No options found',
    error = false,
    helperText,
    listboxRef,
    onListboxScroll,
}: AppAutocompleteProps<T>) => {
    const handleInputChange = useCallback(
        (
            _event: SyntheticEvent,
            value: string,
            reason: AutocompleteInputChangeReason,
        ) => {
            if (reason === 'input' || reason === 'clear') {
                onInputValueChange(value);
            }
        },
        [onInputValueChange],
    );

    return (
        <Autocomplete<T, false, false, false>
            fullWidth
            forcePopupIcon={false}
            clearOnBlur={false}
            options={options}
            value={null}
            inputValue={inputValue}
            loading={loading}
            getOptionLabel={getOptionLabel}
            getOptionDisabled={getOptionDisabled}
            renderOption={renderOption}
            filterOptions={(availableOptions) => availableOptions}
            noOptionsText={noOptionsText}
            loadingText={loadingText}
            onInputChange={handleInputChange}
            onChange={(_event, option) => onOptionSelect(option)}
            slotProps={{
                listbox: {
                    ref: listboxRef,
                    onScroll: onListboxScroll,
                    style: {
                        maxHeight: 320,
                        overflowY: 'auto',
                    },
                },
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    error={error}
                    helperText={helperText}
                />
            )}
        />
    );
};

export default AppAutocomplete;
