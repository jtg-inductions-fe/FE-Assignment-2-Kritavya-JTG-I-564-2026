import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '@store';
import { hideSnackbar } from '@store';

import AppSnackbar from './AppSnackbar';
import {
    StyledSnackbarContainer,
    StyledSnackbarItem,
} from './AppSnackbarContainer.styles';

const AppSnackbarContainer = () => {
    const dispatch = useAppDispatch();
    const [closingIds, setClosingIds] = useState<number[]>([]);

    const snackbars = useAppSelector((state) => state.snackbar.snackbars);

    const handleClose = (id: number) => {
        setClosingIds((current) =>
            current.includes(id) ? current : [...current, id],
        );
    };

    const handleExited = (id: number) => {
        dispatch(hideSnackbar(id));
        setClosingIds((current) =>
            current.filter((closingId) => closingId !== id),
        );
    };

    return (
        <StyledSnackbarContainer>
            {snackbars.map((snackbar) => (
                <StyledSnackbarItem key={snackbar.id}>
                    <AppSnackbar
                        id={snackbar.id}
                        open={!closingIds.includes(snackbar.id)}
                        message={snackbar.message}
                        severity={snackbar.severity}
                        onClose={() => handleClose(snackbar.id)}
                        onExited={() => handleExited(snackbar.id)}
                    />
                </StyledSnackbarItem>
            ))}
        </StyledSnackbarContainer>
    );
};

export default AppSnackbarContainer;
