import { ComponentType } from 'react';

import type { MenuProps } from '@mui/material';

export interface AppMenuItem {
    label: string;
    icon?: ComponentType;
    onClick: () => void;
    disabled?: boolean;
    divider?: boolean;
}

export interface AppMenuProps {
    anchorEl: HTMLElement | null;
    onClose: () => void;
    items: AppMenuItem[];
    menuProps?: Partial<MenuProps>;
}
