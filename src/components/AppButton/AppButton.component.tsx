import { StyledAppButton } from './AppButton.styles';
import type { AppButtonProps } from './AppButton.types';

const AppButton = ({
    children,
    type = 'button',
    onClick,
    startIcon,
    endIcon,
    disabled = false,
}: AppButtonProps) => (
    <StyledAppButton
        type={type}
        variant="contained"
        onClick={onClick}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
    >
        {children}
    </StyledAppButton>
);

export default AppButton;
