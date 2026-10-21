import type { ReactNode } from 'react';

export interface PageLayoutProps {
    children: ReactNode;
    image?: string;
    imageAlt?: string;
    aside?: ReactNode;
    mobileActions?: ReactNode;
    container?: boolean;
}
