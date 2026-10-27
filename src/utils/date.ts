/**
 * Formats a GitHub account creation date for display.
 *
 * @param date - Account creation date returned by the API.
 * @returns Formatted date or "Not available" when no valid date is provided.
 */
export const formatMemberSince = (date: string | null): string => {
    if (!date) {
        return 'Not available';
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return 'Not available';
    }

    return parsedDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    });
};
