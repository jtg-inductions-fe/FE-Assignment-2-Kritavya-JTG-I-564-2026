import { SyntheticEvent, useCallback } from 'react';

import { Autocomplete, TextField } from '@mui/material';
import type { AutocompleteInputChangeReason } from '@mui/material/Autocomplete';

import type { AppAutocompleteProps } from './AppAutocomplete.types';

const AppAutocomplete = <T,>({
    options,
    inputValue,
    label,
    open = false,
    onOpen,
    onClose,
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
            open={open}
            onOpen={onOpen}
            onClose={onClose}
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
                popper: {
                    placement: 'bottom-start',
                    modifiers: [
                        {
                            name: 'flip',
                            enabled: false,
                        },
                    ],
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
