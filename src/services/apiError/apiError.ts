import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export type ApiErrorType =
    | 'network'
    | 'not-found'
    | 'rate-limit'
    | 'client'
    | 'server'
    | 'unknown';

export interface ApiError {
    type: ApiErrorType;
    message: string;
    status?: number | string;
}

export const getApiError = (error: unknown): ApiError => {
    if (!error || typeof error !== 'object' || !('status' in error)) {
        return {
            type: 'unknown',
            message: 'Something went wrong. Please try again.',
        };
    }

    const apiError = error as FetchBaseQueryError;

    if (typeof apiError.status === 'number') {
        const status = apiError.status;

        if (
            status === 403 &&
            typeof apiError.data === 'object' &&
            apiError.data !== null &&
            'message' in apiError.data &&
            typeof apiError.data.message === 'string' &&
            apiError.data.message.includes('API rate limit exceeded')
        ) {
            return {
                type: 'rate-limit',
                message:
                    'The GitHub API may have reached its rate limit. Please try again later.',
                status,
            };
        }

        if (status === 404) {
            return {
                type: 'not-found',
                message: 'The requested GitHub resource could not be found.',
                status,
            };
        }

        if (status >= 500) {
            return {
                type: 'server',
                message:
                    'GitHub is temporarily unavailable. Please try again later.',
                status,
            };
        }

        if (status >= 400) {
            return {
                type: 'client',
                message: 'The request could not be completed.',
                status,
            };
        }
    }

    if (
        apiError.status === 'FETCH_ERROR' ||
        apiError.status === 'TIMEOUT_ERROR'
    ) {
        return {
            type: 'network',
            message:
                apiError.status === 'FETCH_ERROR'
                    ? 'Unable to connect. Please check your internet connection.'
                    : 'The request timed out. Please try again.',
        };
    }

    if (apiError.status === 'PARSING_ERROR') {
        return {
            type: 'unknown',
            message: 'Something went wrong. Please try again.',
            status: apiError.originalStatus,
        };
    }

    return {
        type: 'unknown',
        message: 'Something went wrong. Please try again.',
        status: String(apiError.status),
    };
};
