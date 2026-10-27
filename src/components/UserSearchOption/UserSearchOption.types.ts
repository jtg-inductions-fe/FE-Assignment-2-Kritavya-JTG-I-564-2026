import type { HTMLAttributes } from 'react';

import type { GitHubUserOption } from '@services';

export interface UserSearchOptionProps {
    option: GitHubUserOption;
    optionProps: HTMLAttributes<HTMLLIElement>;
    loading?: boolean;
}

export interface UserSearchOptionSkeletonProps {
    length?: number;
}
