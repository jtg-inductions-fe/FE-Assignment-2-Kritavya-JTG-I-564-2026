import {
    MobileActions,
    PageAsideContainer,
    PageContentContainer,
    PageContentStack,
    PageIllustration,
    StyledPageLayout,
} from './PageLayout.styles';
import type { PageLayoutProps } from './PageLayout.types';

const PageLayout = ({
    children,
    image,
    imageAlt = '',
    aside,
    mobileActions,
    container = false,
}: PageLayoutProps) => {
    const hasAsideContent = Boolean(aside || image);

    return (
        <StyledPageLayout container={container}>
            <PageContentStack
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

                        {mobileActions && (
                            <MobileActions>{mobileActions}</MobileActions>
                        )}
                    </PageAsideContainer>
                )}
            </PageContentStack>
        </StyledPageLayout>
    );
};

export default PageLayout;
