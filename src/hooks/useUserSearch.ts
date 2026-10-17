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
    syncWithUrl?: boolean;
    defaultQuery?: string;
}

const useUserSearch = ({
    syncWithUrl = false,
    defaultQuery = '',
}: UseUserSearchOptions = {}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const inputValue = useAppSelector((state) => state.search.inputValue);
    const [isInitialized, setIsInitialized] = useState(false);

    const inputValueRef = useRef(inputValue);
    inputValueRef.current = inputValue;

    const debouncedQuery = useDebouncedValue(inputValue.trim(), DEBOUNCE_DELAY);

    const isQueryValid = debouncedQuery.length >= MIN_QUERY_LENGTH;
    const isCurrentQuery = inputValue.trim() === debouncedQuery;

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

    const options: SearchOptionItem[] = useMemo(() => {
        if (!isQueryValid || !isCurrentQuery || !currentData) {
            return [];
        }

        return currentData.pages.flatMap((page) =>
            page.items.map(({ id, login, avatar_url, type }) => ({
                id,
                username: login,
                avatarUrl: avatar_url,
                userType: type,
            })),
        );
    }, [currentData, isCurrentQuery, isQueryValid]);

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

    const handleOptionSelect = useCallback(
        (selectedUsername: string) => {
            dispatch(setSearchValue(selectedUsername));
            void navigate(`/users/${encodeURIComponent(selectedUsername)}`);
        },
        [dispatch, navigate],
    );

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
