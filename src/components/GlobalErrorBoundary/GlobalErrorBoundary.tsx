import { Component, type ReactNode } from 'react';

import ErrorFallback from '../ErrorFallback/ErrorFallback';

interface GlobalErrorBoundaryProps {
    children: ReactNode;
}

interface GlobalErrorBoundaryState {
    hasError: boolean;
    errorMessage: string;
}

class GlobalErrorBoundary extends Component<
    GlobalErrorBoundaryProps,
    GlobalErrorBoundaryState
> {
    state: GlobalErrorBoundaryState = {
        hasError: false,
        errorMessage: '',
    };

    static getDerivedStateFromError(error: Error): GlobalErrorBoundaryState {
        return {
            hasError: true,
            errorMessage: error.message,
        };
    }

    // componentDidCatch(error: Error, info: ErrorInfo) {
    //     console.error('Global error:', error, info);
    // }

    render() {
        if (this.state.hasError) {
            return <ErrorFallback message={this.state.errorMessage} />;
        }

        return this.props.children;
    }
}

export default GlobalErrorBoundary;
