import type { ReactNode } from 'react';

export interface PageHeadingLine {
    text: string;
    outlined?: boolean;
}

export interface PageIntroProps {
    eyebrow: string;
    heading: PageHeadingLine[];
    description?: string;
    actions?: ReactNode;
    children?: ReactNode;
}

export interface PageLayoutProps {
    children: ReactNode;
    image?: string;
    imageAlt?: string;
    aside?: ReactNode;
    container?: boolean;
}
