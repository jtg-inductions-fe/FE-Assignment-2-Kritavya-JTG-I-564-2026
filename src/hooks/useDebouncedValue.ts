import { useEffect, useState } from 'react';

/**
 * Returns a debounced version of a value after the specified delay.
 *
 * Resets the timer whenever the value or delay changes, ensuring that
 * the debounced value updates only after the delay has elapsed.
 *
 * @param value - The value to debounce.
 * @param delay - The delay in milliseconds. Defaults to 400ms.
 * @returns The debounced value.
 */
const useDebouncedValue = <T>(value: T, delay = 400): T => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [value, delay]);

    return debouncedValue;
};

export default useDebouncedValue;
