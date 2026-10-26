import { useCallback, useEffect, useMemo, useRef } from 'react';

import type { GitHubUserOption } from '@services';

interface UseUserSearchResultsOptions {
    options: GitHubUserOption[];
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    onLoadMore: () => void;
}

const LOADING_OPTION: GitHubUserOption = {
    id: -1,
    username: '__loading__',
    avatarUrl: '',
    userType: '',
};

/**
 * Prepares autocomplete options and observes the last option
 * to load more results when it becomes visible.
 */
const useUserSearchResults = ({
    options,
    hasNextPage,
    isFetchingNextPage,
    onLoadMore,
}: UseUserSearchResultsOptions) => {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const isLoadingMoreRef = useRef(false);

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

    const lastOptionRef = useCallback(
        (node: HTMLLIElement | null) => {
            observerRef.current?.disconnect();
            observerRef.current = null;

            if (
                !node ||
                !hasNextPage ||
                isFetchingNextPage ||
                isLoadingMoreRef.current
            ) {
                return;
            }

            observerRef.current = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !isLoadingMoreRef.current) {
                        isLoadingMoreRef.current = true;
                        onLoadMore();
                    }
                },
                {
                    root: node.parentElement,
                    rootMargin: '0px 0px 48px 0px',
                    threshold: 0,
                },
            );

            observerRef.current.observe(node);
        },
        [hasNextPage, isFetchingNextPage, onLoadMore],
    );

    useEffect(() => {
        if (!isFetchingNextPage) {
            isLoadingMoreRef.current = false;
        }
    }, [isFetchingNextPage]);

    useEffect(
        () => () => {
            observerRef.current?.disconnect();
        },
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
