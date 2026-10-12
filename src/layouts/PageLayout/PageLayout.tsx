import {
    PageAsideContainer,
    PageContentContainer,
    PageContentStack,
    PageIllustration,
    StyledPageLayout,
} from './PageLayout.styles';
import type { PageLayoutProps } from './types';

const PageLayout = ({
    children,
    image,
    imageAlt = '',
    aside,
    container = false,
}: PageLayoutProps) => {
    const hasAsideContent = Boolean(aside || image);

    return (
        <StyledPageLayout container={container}>
            <PageContentStack
                alignItems="center"
                justifyContent={hasAsideContent ? 'center' : 'flex-start'}
            >
                <PageContentContainer hasAsideContent={hasAsideContent}>
                    {children}
                </PageContentContainer>

                {hasAsideContent && (
                    <PageAsideContainer>
                        {aside}

                        {image && (
                            <PageIllustration src={image} alt={imageAlt} />
                        )}
                    </PageAsideContainer>
                )}
            </PageContentStack>
        </StyledPageLayout>
    );
};

export default PageLayout;
