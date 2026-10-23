import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LinkIcon from '@mui/icons-material/Link';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {
    CircularProgress,
    IconButton,
    InputAdornment,
    Typography,
} from '@mui/material';

import { AppButton } from '@components';

import {
    BrandHeaderStack,
    BrandLogoWrapper,
    BrandText,
    CardSubtitle,
    CardTitle,
    ErrorAlert,
    FieldGroup,
    FieldLabel,
    FormContainer,
    FormStack,
    InfoBox,
    ScopeLink,
    StyledLoginCard,
    StyledLoginCardContent,
    StyledTextField,
    TitleStack,
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
    onUsernameChange,
    onTokenChange,
    onToggleShowToken,
    onSubmit,
}: LoginCardProps) => (
    <StyledLoginCard elevation={0}>
        <StyledLoginCardContent>
            <BrandHeaderStack>
                <BrandLogoWrapper>
                    <GitHubIcon fontSize="large" />
                </BrandLogoWrapper>
                <BrandText variant="subtitle2">GITHUB EXPLORER</BrandText>
            </BrandHeaderStack>

            <TitleStack>
                <CardTitle variant="h3">Sign in to Continue</CardTitle>
                <CardSubtitle variant="body2">
                    Enter your GitHub username & Personal Access Token.
                </CardSubtitle>
            </TitleStack>

            <FormContainer onSubmit={onSubmit} noValidate>
                <FormStack>
                    {errorMessage && (
                        <ErrorAlert severity="error">{errorMessage}</ErrorAlert>
                    )}

                    <FieldGroup>
                        <FieldLabel variant="body2">GitHub Username</FieldLabel>

                        <StyledTextField
                            {...usernameField}
                            fullWidth
                            placeholder="e.g. torvalds"
                            disabled={isLoading}
                            error={Boolean(usernameError)}
                            helperText={usernameError}
                            onChange={(event) => {
                                void usernameField.onChange(event);
                                onUsernameChange();
                            }}
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
                    </FieldGroup>

                    <FieldGroup>
                        <FieldLabel variant="body2">
                            Personal Access Token
                        </FieldLabel>
                        <StyledTextField
                            {...tokenField}
                            fullWidth
                            type={showToken ? 'text' : 'password'}
                            placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                            disabled={isLoading}
                            error={Boolean(tokenError)}
                            helperText={tokenError}
                            onChange={(event) => {
                                void tokenField.onChange(event);
                                onTokenChange();
                            }}
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
                                                aria-label="toggle token visibility"
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
                    </FieldGroup>

                    <InfoBox icon={<InfoOutlinedIcon fontSize="small" />}>
                        <Typography variant="body2" color="text.secondary">
                            Use a GitHub Personal Access Token with at least{' '}
                            <ScopeLink
                                href={patDocsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                            >
                                read:user
                            </ScopeLink>{' '}
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
                </FormStack>
            </FormContainer>
        </StyledLoginCardContent>
    </StyledLoginCard>
);

export default LoginCard;
