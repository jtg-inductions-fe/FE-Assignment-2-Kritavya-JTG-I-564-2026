import type { FormEventHandler } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

export interface LoginFormValues {
    username: string;
    token: string;
}

export interface LoginCardProps {
    usernameField: UseFormRegisterReturn<'username'>;
    tokenField: UseFormRegisterReturn<'token'>;
    usernameError?: string;
    tokenError?: string;
    showToken: boolean;
    isLoading: boolean;
    errorMessage: string | null;
    patDocsUrl: string;
    onToggleShowToken: () => void;
    onSubmit: FormEventHandler<HTMLFormElement>;
    onContinueWithGitHub: () => void;
}
