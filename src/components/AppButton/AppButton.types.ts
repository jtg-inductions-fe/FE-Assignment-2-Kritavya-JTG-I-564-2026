import { ReactNode } from 'react';

export interface AppButtonProps {
    children: ReactNode;
    onClick?: () => void;
    startIcon?: ReactNode;
    disabled?: boolean;
    variant?: 'contained' | 'outlined' | 'text';
}
