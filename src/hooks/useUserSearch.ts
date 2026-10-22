import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { UIEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import type { SearchOptionItem } from '@components';
import { DEBOUNCE_DELAY, MIN_QUERY_LENGTH, SEARCH_PARAMS } from '@constant';
import { useSearchUsersInfiniteQuery } from '@services';
import {
    clearSearch,
    setSearchValue,
    useAppDispatch,
    useAppSelector,
} from '@store';

import useDebouncedValue from './useDebouncedValue';

interface UseUserSearchOptions {
    /** Synchronizes the search query with the URL search parameters. */
    syncWithUrl?: boolean;

    /** Initial search query used when URL synchronization is disabled. */
    defaultQuery?: string;
}

/**
 * Manages GitHub user search, autocomplete results, and infinite scrolling.
 *
 * Supports debounced API requests, optional URL synchronization, and
 * navigation to a selected user's profile.
 *
 * @param options - Configuration for URL synchronization and the initial query.
 * @returns Search state, autocomplete options, loading/error information,
 * and handlers for search interactions.
 */
const useUserSearch = ({
    syncWithUrl = false,
    defaultQuery = '',
}: UseUserSearchOptions = {}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const inputValue = useAppSelector((state) => state.search.inputValue);
    const [isInitialized, setIsInitialized] = useState(false);

    // Keeps the latest input available to effects without adding it as a dependency.
    const inputValueRef = useRef(inputValue);
    inputValueRef.current = inputValue;

    // Delays API requests until the user pauses typing.
    const debouncedQuery = useDebouncedValue(inputValue.trim(), DEBOUNCE_DELAY);

    /** Determines whether the debounced query meets the minimum length. */
    const isQueryValid = debouncedQuery.length >= MIN_QUERY_LENGTH;

    /** Prevents results for an older query from appearing during debouncing. */
    const isCurrentQuery = inputValue.trim() === debouncedQuery;

    // Initializes the search from the URL or the provided default query.
    useEffect(() => {
        if (syncWithUrl) {
            const urlQuery = searchParams.get(SEARCH_PARAMS.QUERY);

            if (
                urlQuery !== null &&
                urlQuery !== inputValueRef.current.trim()
            ) {
                dispatch(setSearchValue(urlQuery));
            }
        } else if (defaultQuery) {
            dispatch(setSearchValue(defaultQuery));
        }

        setIsInitialized(true);
    }, [defaultQuery, dispatch, searchParams, syncWithUrl]);

    // Skips the API request until the query meets the minimum length.
    const {
        currentData,
        isLoading,
        isFetching,
        isFetchingNextPage,
        isError,
        hasNextPage,
        fetchNextPage,
        refetch,
    } = useSearchUsersInfiniteQuery(debouncedQuery, {
        skip: !isQueryValid,
    });

    /**
     * Converts API results into the format required by the autocomplete.
     * Hides results when the query is invalid or still being debounced.
     */
    const options: SearchOptionItem[] = useMemo(() => {
        if (!isQueryValid || !isCurrentQuery || !currentData) {
            return [];
        }

        return currentData.pages.flatMap((page) =>
            page.items.map(({ id, login, avatarUrl, type }) => ({
                id,
                username: login,
                avatarUrl: avatarUrl,
                userType: type,
            })),
        );
    }, [currentData, isCurrentQuery, isQueryValid]);

    // Keeps the URL query in sync with the debounced input.
    useEffect(() => {
        if (!syncWithUrl || !isInitialized || !isCurrentQuery) {
            return;
        }

        const currentQuery = searchParams.get(SEARCH_PARAMS.QUERY) ?? '';

        if (currentQuery === debouncedQuery) {
            return;
        }

        const params = new URLSearchParams(searchParams);

        if (isQueryValid) {
            params.set(SEARCH_PARAMS.QUERY, debouncedQuery);
        } else {
            params.delete(SEARCH_PARAMS.QUERY);
        }

        // Resets pagination when the search query changes.
        params.delete(SEARCH_PARAMS.PAGE);

        setSearchParams(params, { replace: true });
    }, [
        debouncedQuery,
        isCurrentQuery,
        isInitialized,
        isQueryValid,
        searchParams,
        setSearchParams,
        syncWithUrl,
    ]);

    /**
     * Updates the search input and clears the search when the input is empty.
     * Also updates the URL when URL synchronization is enabled.
     *
     * @param value - The new search input value.
     */
    const handleValueChange = useCallback(
        (value: string) => {
            if (value === '') {
                dispatch(clearSearch());

                if (syncWithUrl) {
                    const params = new URLSearchParams(searchParams);
                    params.delete(SEARCH_PARAMS.QUERY);
                    params.delete(SEARCH_PARAMS.PAGE);
                    setSearchParams(params, { replace: true });
                }

                return;
            }

            dispatch(setSearchValue(value));
        },
        [dispatch, searchParams, setSearchParams, syncWithUrl],
    );

    /**
     * Selects a GitHub user and navigates to their profile page.
     *
     * @param selectedUsername - The username of the selected GitHub user.
     */
    const handleOptionSelect = useCallback(
        (selectedUsername: string) => {
            dispatch(setSearchValue(selectedUsername));
            void navigate(`/users/${encodeURIComponent(selectedUsername)}`);
        },
        [dispatch, navigate],
    );

    /**
     * Fetches the next page when the autocomplete list is scrolled near the bottom.
     * Prevents fetching when no more pages are available or a request is in progress.
     *
     * @param event - The scroll event from the autocomplete list.
     */
    const handleListScroll = useCallback(
        (event: UIEvent<HTMLUListElement>) => {
            const listbox = event.currentTarget;

            const reachedBottom =
                listbox.scrollTop + listbox.clientHeight >=
                listbox.scrollHeight - 50;

            if (!reachedBottom) {
                return;
            }

            if (!hasNextPage || isFetching || isFetchingNextPage) {
                return;
            }

            void fetchNextPage();
        },
        [fetchNextPage, hasNextPage, isFetching, isFetchingNextPage],
    );

    /**
     * Retries the current search request after an error.
     */
    const handleRetry = useCallback(() => {
        void refetch();
    }, [refetch]);

    return {
        inputValue,
        options,
        isQueryValid,
        isLoading:
            Boolean(inputValue.trim()) &&
            (isLoading || isFetching || !isCurrentQuery),
        isFetchingNextPage: isCurrentQuery && isFetchingNextPage,
        hasNextPage: isCurrentQuery && Boolean(hasNextPage),
        isError: isCurrentQuery && isError,
        errorMessage:
            isCurrentQuery && isError
                ? 'Could not load GitHub users. Try again.'
                : null,
        handleValueChange,
        handleOptionSelect,
        handleListScroll,
        handleRetry,
    };
};

export default useUserSearch;
