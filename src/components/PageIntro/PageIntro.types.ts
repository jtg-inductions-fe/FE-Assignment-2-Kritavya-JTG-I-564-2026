import { ReactNode } from 'react';

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

export interface PageHeadingLineProps {
    outlined?: boolean;
}
