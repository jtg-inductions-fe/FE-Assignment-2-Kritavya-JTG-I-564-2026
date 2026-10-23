import { ReactNode } from 'react';

export interface GlobalErrorBoundaryProps {
    children: ReactNode;
}

export interface GlobalErrorBoundaryState {
    hasError: boolean;
    errorMessage: string;
}
