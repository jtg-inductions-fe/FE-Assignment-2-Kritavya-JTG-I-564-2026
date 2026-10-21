import { useState } from 'react';

import { hideSnackbar, useAppDispatch, useAppSelector } from '@store';

const useAppSnackbar = () => {
    const dispatch = useAppDispatch();
    const snackbars = useAppSelector((state) => state.snackbar.snackbars);
    const [closingIds, setClosingIds] = useState<number[]>([]);

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

    return {
        snackbars,
        closingIds,
        handleClose,
        handleExited,
    };
};

export default useAppSnackbar;
