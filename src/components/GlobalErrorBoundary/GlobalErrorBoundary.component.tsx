import { Component } from 'react';

import { ErrorFallback } from '@components';

import {
    GlobalErrorBoundaryProps,
    GlobalErrorBoundaryState,
} from './GlobalErrorBoundary.types';

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

    render() {
        if (this.state.hasError) {
            return <ErrorFallback message={this.state.errorMessage} />;
        }

        return this.props.children;
    }
}

export default GlobalErrorBoundary;
