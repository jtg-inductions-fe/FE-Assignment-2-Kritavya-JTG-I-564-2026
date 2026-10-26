import type { ReactNode } from 'react';

import type { AutocompleteProps } from '@mui/material/Autocomplete';

export interface AppAutocompleteProps<T> {
    options: T[];
    inputValue: string;
    label: string;
    open?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    onInputValueChange: (value: string) => void;
    onOptionSelect: (option: T | null) => void;
    getOptionLabel: (option: T) => string;
    renderOption: NonNullable<
        AutocompleteProps<T, false, false, false>['renderOption']
    >;
    getOptionDisabled?: (option: T) => boolean;
    loading?: boolean;
    loadingText?: ReactNode;
    noOptionsText?: ReactNode;
    error?: boolean;
    helperText?: ReactNode;
}
