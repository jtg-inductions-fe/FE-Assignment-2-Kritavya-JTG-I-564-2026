import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import { debounce } from '@mui/material/utils';

import { DEBOUNCE_DELAY, MIN_QUERY_LENGTH, SEARCH_PARAMS } from '@constant';
import type { GitHubUserOption } from '@services';
import { useSearchUsersInfiniteQuery } from '@services';
import {
    clearSearch,
    setSearchValue,
    useAppDispatch,
    useAppSelector,
} from '@store';

interface UseUserSearchOptions {
    /** Whether the search query should be synchronized with the URL. */
    syncWithUrl?: boolean;

    /** Initial search query when URL synchronization is disabled. */
    defaultQuery?: string;
}

/**
 * Manages GitHub user search and infinite-query state.
 *
 * Handles debouncing, Redux input, URL synchronization, pagination,
 * and navigation to a selected user's details page.
 *
 * @param options - Search configuration.
 * @returns Search data, loading states, and interaction handlers.
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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [debouncedQuery, setDebouncedQuery] = useState(inputValue.trim());

    const inputValueRef = useRef(inputValue);
    inputValueRef.current = inputValue;

    /**
     * Delays updates to the query until the user stops typing.
     */
    const debouncedUpdate = useMemo(
        () =>
            debounce((value: string) => {
                setDebouncedQuery(value);
            }, DEBOUNCE_DELAY),
        [],
    );

    useEffect(() => {
        debouncedUpdate(inputValue.trim());

        return () => {
            debouncedUpdate.clear();
        };
    }, [debouncedUpdate, inputValue]);

    const isQueryValid = debouncedQuery.length >= MIN_QUERY_LENGTH;

    /**
     * Prevents old results from being displayed while a new query is debounced.
     */
    const isCurrentQuery = inputValue.trim() === debouncedQuery;

    /**
     * Initializes the search input and dropdown from the URL.
     */
    useEffect(() => {
        if (syncWithUrl) {
            const urlQuery = searchParams.get(SEARCH_PARAMS.QUERY) ?? '';

            if (urlQuery !== inputValueRef.current.trim()) {
                if (urlQuery) {
                    dispatch(setSearchValue(urlQuery));
                } else {
                    dispatch(clearSearch());
                }
            }

            setIsDropdownOpen(Boolean(urlQuery.trim()));
        } else if (defaultQuery) {
            dispatch(setSearchValue(defaultQuery));
            setIsDropdownOpen(Boolean(defaultQuery.trim()));
        }

        setIsInitialized(true);
    }, [defaultQuery, dispatch, searchParams, syncWithUrl]);

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
     * Combines the already-normalized results from every fetched page.
     */
    const options: GitHubUserOption[] = useMemo(() => {
        if (!isQueryValid || !isCurrentQuery || !currentData) {
            return [];
        }

        return currentData.pages.flatMap((page) => page.items);
    }, [currentData, isCurrentQuery, isQueryValid]);

    /**
     * Synchronizes the settled query with the URL.
     */
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
     * Updates the search input and clears the query when input is cleared.
     *
     * @param value - The new input value.
     */
    const handleValueChange = useCallback(
        (value: string) => {
            if (!value.trim()) {
                dispatch(clearSearch());
                setIsDropdownOpen(false);

                if (syncWithUrl) {
                    const params = new URLSearchParams(searchParams);

                    params.delete(SEARCH_PARAMS.QUERY);
                    params.delete(SEARCH_PARAMS.PAGE);

                    setSearchParams(params, { replace: true });
                }

                return;
            }

            dispatch(setSearchValue(value));
            setIsDropdownOpen(true);
        },
        [dispatch, searchParams, setSearchParams, syncWithUrl],
    );

    const handleDropdownOpen = useCallback(() => {
        setIsDropdownOpen(true);
    }, []);

    const handleDropdownClose = useCallback(() => {
        setIsDropdownOpen(false);
    }, []);

    /**
     * Navigates to the selected GitHub user's details page.
     *
     * @param option - The selected user, if any.
     */
    const handleOptionSelect = useCallback(
        (option: GitHubUserOption | null) => {
            if (!option || option.id === -1) {
                return;
            }

            dispatch(setSearchValue(option.username));
            setIsDropdownOpen(false);

            void navigate(`/users/${encodeURIComponent(option.username)}`);
        },
        [dispatch, navigate],
    );

    /**
     * Fetches the next page when the results component requests more data.
     */
    const handleLoadMore = useCallback(() => {
        if (
            !isCurrentQuery ||
            !hasNextPage ||
            isFetching ||
            isFetchingNextPage
        ) {
            return;
        }

        void fetchNextPage();
    }, [
        fetchNextPage,
        hasNextPage,
        isCurrentQuery,
        isFetching,
        isFetchingNextPage,
    ]);

    /**
     * Retries the current search after an API error.
     */
    const handleRetry = useCallback(() => {
        void refetch();
    }, [refetch]);

    return {
        inputValue,
        options,
        isDropdownOpen,
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
        handleDropdownOpen,
        handleDropdownClose,
        handleOptionSelect,
        handleLoadMore,
        handleRetry,
    };
};

export default useUserSearch;
