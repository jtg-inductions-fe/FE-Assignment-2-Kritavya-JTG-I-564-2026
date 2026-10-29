import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LinkIcon from '@mui/icons-material/Link';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {
    Box,
    CircularProgress,
    IconButton,
    InputAdornment,
    Link,
    Stack,
    Typography,
} from '@mui/material';

import { AppButton } from '@components';

import {
    ErrorAlert,
    InfoBox,
    StyledLoginCard,
    StyledLoginCardContent,
    StyledTextField,
} from './LoginCard.styles';
import type { LoginCardProps } from './LoginCard.types';

const LoginCard = ({
    usernameField,
    tokenField,
    usernameError,
    tokenError,
    showToken,
    isLoading,
    errorMessage,
    patDocsUrl,
    onToggleShowToken,
    onSubmit,
    onContinueWithGitHub,
}: LoginCardProps) => (
    <StyledLoginCard elevation={0}>
        <StyledLoginCardContent>
            <Stack alignItems="center" gap={1} mb={3}>
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    color="primary.dark"
                >
                    <GitHubIcon fontSize="large" />
                </Stack>

                <Typography
                    variant="subtitle2"
                    fontFamily="Azonix"
                    fontSize={16}
                    letterSpacing={2}
                >
                    GITHUB EXPLORER
                </Typography>
            </Stack>

            <Stack textAlign="center" alignItems="center" gap={1} mb={4}>
                <Typography variant="h3" fontWeight={700} color="primary.dark">
                    Sign in to Continue
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Enter your GitHub username and Personal Access Token.
                </Typography>
            </Stack>

            <Box component="form" width="100%" onSubmit={onSubmit} noValidate>
                <Stack gap={2.5}>
                    {errorMessage && (
                        <ErrorAlert severity="error">{errorMessage}</ErrorAlert>
                    )}

                    <Stack gap={1}>
                        <Typography
                            variant="body2"
                            fontWeight={600}
                            color="primary.dark"
                        >
                            GitHub Username
                        </Typography>

                        <StyledTextField
                            {...usernameField}
                            fullWidth
                            placeholder="e.g. torvalds"
                            disabled={isLoading}
                            error={Boolean(usernameError)}
                            helperText={usernameError}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonOutlineIcon fontSize="small" />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Stack>

                    <Stack gap={1}>
                        <Typography
                            variant="body2"
                            fontWeight={600}
                            color="primary.dark"
                        >
                            Personal Access Token
                        </Typography>

                        <StyledTextField
                            {...tokenField}
                            fullWidth
                            type={showToken ? 'text' : 'password'}
                            placeholder="Enter your GitHub token"
                            disabled={isLoading}
                            error={Boolean(tokenError)}
                            helperText={tokenError}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LinkIcon fontSize="small" />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                type="button"
                                                onClick={onToggleShowToken}
                                                edge="end"
                                                size="small"
                                                aria-label={
                                                    showToken
                                                        ? 'Hide token'
                                                        : 'Show token'
                                                }
                                            >
                                                {showToken ? (
                                                    <VisibilityOutlinedIcon fontSize="small" />
                                                ) : (
                                                    <VisibilityOffOutlinedIcon fontSize="small" />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Stack>

                    <InfoBox icon={<InfoOutlinedIcon fontSize="small" />}>
                        <Typography variant="body2" color="text.secondary">
                            Use a GitHub Personal Access Token with at least{' '}
                            <Link
                                href={patDocsUrl}
                                onClick={(event) => {
                                    event.preventDefault();
                                    onContinueWithGitHub();
                                }}
                                underline="hover"
                                color="primary.main"
                                fontWeight={600}
                            >
                                read:user &amp; user:follow
                            </Link>{' '}
                            scope.
                        </Typography>
                    </InfoBox>

                    <AppButton
                        type="submit"
                        disabled={isLoading}
                        endIcon={
                            isLoading ? (
                                <CircularProgress size={18} color="inherit" />
                            ) : (
                                <ArrowForwardIcon fontSize="small" />
                            )
                        }
                    >
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </AppButton>
                </Stack>
            </Box>
        </StyledLoginCardContent>
    </StyledLoginCard>
);

export default LoginCard;
