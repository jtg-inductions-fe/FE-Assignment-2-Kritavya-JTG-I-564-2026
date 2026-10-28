import { useCallback, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { GITHUB_PAT_DOCS_URL, ROUTES } from '@constant';
import type { LoginFormValues } from '@container';
import { useLazyVerifyPatTokenQuery } from '@services';
import { setCredentials, showSnackbar, useAppDispatch } from '@store';

const usePatLogin = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [showToken, setShowToken] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        defaultValues: {
            username: '',
            token: '',
        },
        mode: 'onSubmit',
    });

    const [verifyPatToken, { isFetching }] = useLazyVerifyPatTokenQuery();

    const usernameField = register('username', {
        validate: (value) =>
            Boolean(value.trim()) || 'Please enter your GitHub username.',
    });

    const tokenField = register('token', {
        validate: (value) =>
            Boolean(value.trim()) || 'Please enter your Personal Access Token.',
    });

    const handleUsernameChange = useCallback(() => {
        setErrorMessage(null);
    }, []);

    const handleTokenChange = useCallback(() => {
        setErrorMessage(null);
    }, []);

    const handleToggleShowToken = useCallback(() => {
        setShowToken((previous) => !previous);
    }, []);

    const handleContinueWithGitHub = useCallback(() => {
        window.open(GITHUB_PAT_DOCS_URL, '_blank', 'noopener,noreferrer');
    }, []);

    const handleLogin = useCallback(
        async ({ username, token }: LoginFormValues) => {
            setErrorMessage(null);

            const trimmedUsername = username.trim();
            const trimmedToken = token.trim();

            try {
                const authenticatedUser =
                    await verifyPatToken(trimmedToken).unwrap();

                if (
                    authenticatedUser.login.toLowerCase() !==
                    trimmedUsername.toLowerCase()
                ) {
                    setErrorMessage(
                        'The provided username does not match this Personal Access Token.',
                    );
                    return;
                }

                dispatch(
                    setCredentials({
                        token: trimmedToken,
                        username: authenticatedUser.login,
                        avatarUrl: authenticatedUser.avatarUrl,
                    }),
                );

                dispatch(
                    showSnackbar({
                        message: `Welcome back, ${authenticatedUser.login}!`,
                        severity: 'success',
                    }),
                );

                void navigate(ROUTES.HOME, { replace: true });
            } catch {
                setErrorMessage(
                    'Invalid Personal Access Token. Please check your token and read:user scope.',
                );
            }
        },
        [dispatch, navigate, verifyPatToken],
    );

    return {
        usernameField,
        tokenField,
        usernameError: errors.username?.message,
        tokenError: errors.token?.message,
        showToken,
        isLoading: isFetching,
        errorMessage,
        patDocsUrl: GITHUB_PAT_DOCS_URL,
        handleUsernameChange,
        handleTokenChange,
        handleToggleShowToken,
        handleSubmit: handleSubmit(handleLogin),
        handleContinueWithGitHub,
    };
};

export default usePatLogin;
