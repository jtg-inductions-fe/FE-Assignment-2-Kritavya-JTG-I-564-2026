import { Menu, MenuItem, Stack } from '@mui/material';

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
        {items.map(
            ({ label, icon: IconComponent, onClick, disabled, divider }) => (
                <MenuItem
                    key={label}
                    disabled={disabled}
                    divider={divider}
                    onClick={() => {
                        onClose();
                        onClick();
                    }}
                >
                    <Stack direction="row" alignItems="center" gap={1.5}>
                        {IconComponent && <IconComponent />}
                        {label}
                    </Stack>
                </MenuItem>
            ),
        )}
    </Menu>
);

export default AppMenu;
