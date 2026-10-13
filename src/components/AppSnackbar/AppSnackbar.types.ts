import type { AlertColor } from '@mui/material';

export interface AppSnackbarProps {
    id: number;
    message: string;
    severity: AlertColor;
    open: boolean;
    onClose: () => void;
    autoHideDuration?: number;
}
