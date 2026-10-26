/**
 * Converts a snake_case string into camelCase.
 *
 * @param key - The string to convert.
 * @returns The converted string.
 *
 * @example
 * toCamelCase('public_repos'); // 'publicRepos'
 */
const toCamelCase = (key: string): string =>
    key.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());

/**
 * Recursively traverses a data structure to deep-transform all object keys
 * from snake_case into camelCase. Handles arrays, nested objects, and primitive values.
 *
 * @private
 * @param {unknown} value - The input data structure (object, array, or primitive) to convert.
 * @returns {unknown} A new data structure with all keys recursively mapped to camelCase.
 */
export const transformKeysToCamelCase = (value: unknown): unknown => {
    if (Array.isArray(value)) {
        return value.map(transformKeysToCamelCase);
    }

    if (value !== null && typeof value === 'object') {
        return Object.fromEntries(
            Object.entries(value).map(([key, nestedValue]) => [
                toCamelCase(key),
                transformKeysToCamelCase(nestedValue),
            ]),
        );
    }

    return value;
};
