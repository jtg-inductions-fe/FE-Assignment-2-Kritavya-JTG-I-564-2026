import { Menu } from '@mui/material';

import { StyledMenuItem } from './AppMenu.styles';
import type { AppMenuProps } from './AppMenu.types';

const AppMenu = ({ anchorEl, onClose, items, menuProps }: AppMenuProps) => (
    <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...menuProps}
    >
        {items.map(({ label, icon, onClick, disabled, divider }) => (
            <StyledMenuItem
                key={label}
                disabled={disabled}
                divider={divider}
                onClick={() => {
                    onClose();
                    onClick();
                }}
            >
                {icon}
                {label}
            </StyledMenuItem>
        ))}
    </Menu>
);

export default AppMenu;
