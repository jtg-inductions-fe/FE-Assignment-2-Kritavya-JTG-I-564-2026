import type { FormEvent } from 'react';

export interface LoginCardProps {
    username: string;
    token: string;
    showToken: boolean;
    isLoading: boolean;
    errorMessage: string | null;
    patDocsUrl: string;
    onUsernameChange: (value: string) => void;
    onTokenChange: (value: string) => void;
    onToggleShowToken: () => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onContinueWithGitHub: () => void;
}
