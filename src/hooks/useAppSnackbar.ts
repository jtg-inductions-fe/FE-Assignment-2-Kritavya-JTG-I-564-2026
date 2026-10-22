import { useState } from 'react';

import { hideSnackbar, useAppDispatch, useAppSelector } from '@store';

/**
 * Provides snackbar state and handlers for managing snackbar notifications.
 *
 * Retrieves the current snackbar notifications from the Redux store and
 * manages their closing transitions using local state.
 *
 * @returns An object containing the snackbar notifications, closing IDs,
 * and handlers for closing and removing snackbars after their exit transitions.
 */
const useAppSnackbar = () => {
    const dispatch = useAppDispatch();
    const snackbars = useAppSelector((state) => state.snackbar.snackbars);
    const [closingIds, setClosingIds] = useState<number[]>([]);

    /**
     * Initiates the closing transition for a snackbar.
     *
     * Adds the snackbar ID to the list of closing snackbars if it is not
     * already present, preventing duplicate entries.
     *
     * @param {number} id - The unique ID of the snackbar to close.
     * @returns {void}
     *
     * @param {number} id - The unique ID of the snackbar to close.
     * @returns {void}
     */
    const handleClose = (id: number) => {
        setClosingIds((current) =>
            current.includes(id) ? current : [...current, id],
        );
    };

    /**
     * Handles the completion of a snackbar's exit transition.
     *
     * Dispatches an action to remove the snackbar from the Redux state
     * and removes its ID from the list of closing snackbars.
     *
     * @param {number} id - The unique ID of the snackbar whose exit transition has completed.
     * @returns {void}
     */
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
