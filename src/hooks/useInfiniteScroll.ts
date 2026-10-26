import { useCallback, useEffect, useRef } from 'react';

interface UseInfiniteScrollOptions {
    enabled: boolean;
    isFetching: boolean;
    onLoadMore: () => void;
}

/**
 * Loads the next page when the last option enters the visible area.
 */
const useInfiniteScroll = ({
    enabled,
    isFetching,
    onLoadMore,
}: UseInfiniteScrollOptions) => {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const isLoadingMoreRef = useRef(false);

    const lastElementRef = useCallback(
        (node: HTMLLIElement | null) => {
            observerRef.current?.disconnect();
            observerRef.current = null;

            if (!node || !enabled || isFetching) {
                return;
            }

            observerRef.current = new IntersectionObserver(
                ([entry]) => {
                    if (!entry.isIntersecting || isLoadingMoreRef.current) {
                        return;
                    }

                    isLoadingMoreRef.current = true;
                    onLoadMore();
                },
                {
                    root: node.parentElement,
                    rootMargin: '0px 0px 48px 0px',
                    threshold: 0,
                },
            );

            observerRef.current.observe(node);
        },
        [enabled, isFetching, onLoadMore],
    );

    useEffect(() => {
        if (!isFetching) {
            isLoadingMoreRef.current = false;
        }
    }, [isFetching]);

    useEffect(() => () => observerRef.current?.disconnect(), []);

    return lastElementRef;
};

export default useInfiniteScroll;
