import {
    PageActions,
    PageDescription,
    PageEyebrowAccent,
    PageEyebrowContainer,
    PageEyebrowText,
    PageHeading,
    PageHeadingLine,
    PageIntroContainer,
} from './PageIntro.styles';
import type { PageIntroProps } from './types';

const PageIntro = ({
    eyebrow,
    heading,
    description,
    actions,
    children,
}: PageIntroProps) => (
    <PageIntroContainer>
        <PageEyebrowContainer direction="row" alignItems="center" spacing={1.5}>
            <PageEyebrowAccent />

            <PageEyebrowText variant="overline">{eyebrow}</PageEyebrowText>
        </PageEyebrowContainer>

        <PageHeading>
            {heading.map((line, index) => (
                <PageHeadingLine
                    key={`${line.text}-${index}`}
                    outlined={line.outlined}
                >
                    {line.text}
                </PageHeadingLine>
            ))}
        </PageHeading>

        {description && <PageDescription>{description}</PageDescription>}

        {(actions || children) && (
            <PageActions direction="row" flexWrap="wrap" gap={2}>
                {actions}
                {children}
            </PageActions>
        )}
    </PageIntroContainer>
);

export default PageIntro;
