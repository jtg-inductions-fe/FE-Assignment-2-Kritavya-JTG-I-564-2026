import { type FormEvent, useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { GITHUB_PAT_DOCS_URL, ROUTES } from '@constant';
import { useLazyVerifyPatTokenQuery } from '@services';
import { setCredentials, showSnackbar, useAppDispatch } from '@store';

/**
 * Handles GitHub Personal Access Token authentication and login form state.
 */
const usePatLogin = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');
    const [showToken, setShowToken] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [verifyPatToken, { isFetching }] = useLazyVerifyPatTokenQuery();

    const handleUsernameChange = useCallback((value: string) => {
        setUsername(value);
        setErrorMessage(null);
    }, []);

    const handleTokenChange = useCallback((value: string) => {
        setToken(value);
        setErrorMessage(null);
    }, []);

    const handleToggleShowToken = useCallback(() => {
        setShowToken((previous) => !previous);
    }, []);

    const handleContinueWithGitHub = useCallback(() => {
        window.open(GITHUB_PAT_DOCS_URL, '_blank', 'noopener,noreferrer');
    }, []);

    const handleSubmit = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const trimmedUsername = username.trim();
            const trimmedToken = token.trim();

            if (!trimmedUsername) {
                setErrorMessage('Please enter your GitHub username.');
                return;
            }

            if (!trimmedToken) {
                setErrorMessage('Please enter your Personal Access Token.');
                return;
            }

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
        [dispatch, navigate, token, username, verifyPatToken],
    );

    return {
        username,
        token,
        showToken,
        isLoading: isFetching,
        errorMessage,
        patDocsUrl: GITHUB_PAT_DOCS_URL,
        handleUsernameChange,
        handleTokenChange,
        handleToggleShowToken,
        handleSubmit,
        handleContinueWithGitHub,
    };
};

export default usePatLogin;
