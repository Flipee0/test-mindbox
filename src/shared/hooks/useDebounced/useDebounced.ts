import { useEffect, useState } from 'react';

export const useDebounced = <T>(
    value: T,
    delay: number = 1000,
    onSetDebounced?: (value: T) => void,
): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        // Set a timeout to update the debounced value after the specified delay.
        const handler = setTimeout(() => {
            setDebouncedValue(value);
            onSetDebounced?.(value);
        }, delay);

        // Clear the timeout if the value or delay changes before the timer finishes.
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};
