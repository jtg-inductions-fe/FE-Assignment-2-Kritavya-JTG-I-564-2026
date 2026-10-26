import { useCallback, useMemo } from 'react';

import type { GitHubUserOption } from '@services';

import useInfiniteScroll from './useInfiniteScroll';

interface UseUserSearchResultsOptions {
    options: GitHubUserOption[];
    hasNextPage: boolean;
    isFetching: boolean;
    onLoadMore: () => void;
}

const LOADING_OPTION: GitHubUserOption = {
    id: -1,
    username: '__loading__',
    avatarUrl: '',
    userType: '',
};

/**
 * Prepares the options displayed in the user search dropdown.
 */
const useUserSearchResults = ({
    options,
    hasNextPage,
    isFetching,
    onLoadMore,
}: UseUserSearchResultsOptions) => {
    const lastOptionRef = useInfiniteScroll({
        enabled: hasNextPage,
        isFetching,
        onLoadMore,
    });

    const listOptions = useMemo(
        () => (hasNextPage ? [...options, LOADING_OPTION] : options),
        [hasNextPage, options],
    );

    const getOptionLabel = useCallback(
        (option: GitHubUserOption) =>
            option.id === LOADING_OPTION.id ? '' : option.username,
        [],
    );

    const getOptionDisabled = useCallback(
        (option: GitHubUserOption) => option.id === LOADING_OPTION.id,
        [],
    );

    const isLoadingOption = useCallback(
        (option: GitHubUserOption) => option.id === LOADING_OPTION.id,
        [],
    );

    return {
        listOptions,
        getOptionLabel,
        getOptionDisabled,
        isLoadingOption,
        lastOptionRef,
    };
};

export default useUserSearchResults;
