import { StyledAppButton } from './AppButton.styles';
import type { AppButtonProps } from './AppButton.types';

const AppButton = ({
    children,
    onClick,
    startIcon,
    disabled = false,
    variant = 'contained',
}: AppButtonProps) => (
    <StyledAppButton
        variant={variant}
        onClick={onClick}
        startIcon={startIcon}
        disabled={disabled}
    >
        {children}
    </StyledAppButton>
);

export default AppButton;
