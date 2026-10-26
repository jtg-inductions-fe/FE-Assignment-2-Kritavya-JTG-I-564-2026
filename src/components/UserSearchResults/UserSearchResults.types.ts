import type { RefCallback } from 'react';

import type { GitHubUserOption } from '@services';

export interface UserSearchResultsProps {
    inputValue: string;
    options: GitHubUserOption[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string | null;
    onValueChange: (value: string) => void;
    onOptionSelect: (option: GitHubUserOption | null) => void;
    getOptionLabel: (option: GitHubUserOption) => string;
    getOptionDisabled: (option: GitHubUserOption) => boolean;
    isLoadingOption: (option: GitHubUserOption) => boolean;
    lastOptionRef: RefCallback<HTMLLIElement>;
}
