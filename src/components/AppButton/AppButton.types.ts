import type { ReactNode } from 'react';

export interface AppButtonProps {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    disabled?: boolean;
}
