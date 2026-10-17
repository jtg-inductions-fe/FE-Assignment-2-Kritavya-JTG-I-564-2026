import type { UIEvent } from 'react';

export interface SearchOptionItem {
    id: number;
    username: string;
    avatarUrl: string;
    userType: string;
}

export interface UserSearchAutocompleteProps {
    value: string;
    options: SearchOptionItem[];
    isLoading: boolean;
    isFetchingNextPage: boolean;
    hasNextPage: boolean;
    errorMessage: string | null;
    onValueChange: (value: string) => void;
    onOptionSelect: (username: string) => void;
    onListScroll: (event: UIEvent<HTMLUListElement>) => void;
}
