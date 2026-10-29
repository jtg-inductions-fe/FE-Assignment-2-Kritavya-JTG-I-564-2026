import { Box, Stack } from '@mui/material';

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
        <Box
            width="100%"
            maxWidth={1536}
            mx="auto"
            pt={container ? { xs: 15, sm: 0 } : { xs: 6, sm: 8 }}
            pb={{ xs: 6, sm: 8 }}
            px={{ xs: 3, sm: 4, md: 6 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={container ? { xs: 'auto', sm: '85vh' } : undefined}
        >
            <Stack
                width="100%"
                alignItems="center"
                direction={{ xs: 'column', sm: 'row' }}
                gap={{ xs: 6, sm: 2, md: 6 }}
                justifyContent={hasAsideContent ? 'center' : 'flex-start'}
            >
                <Box
                    width="100%"
                    maxWidth={hasAsideContent ? 'none' : 960}
                    flex={hasAsideContent ? '1 1 55%' : '1 1 auto'}
                    minWidth={0}
                >
                    {children}
                </Box>

                {hasAsideContent && (
                    <Box
                        flex="1 1 45%"
                        minWidth={0}
                        display="flex"
                        flexDirection="column"
                        justifyContent={{ xs: 'center', sm: 'flex-end' }}
                        alignItems={{ xs: 'center', sm: 'flex-end' }}
                        width="100%"
                    >
                        {aside}

                        {image && (
                            <Box
                                component="img"
                                src={image}
                                alt={imageAlt}
                                display="block"
                                width="100%"
                                maxWidth={{ xs: 420, sm: 520, md: 600 }}
                                maxHeight={{ xs: 360, sm: 440, md: 560 }}
                                style={{
                                    objectFit: 'contain',
                                    objectPosition: 'right center',
                                }}
                            />
                        )}

                        {mobileActions && (
                            <Box
                                display={{ xs: 'flex', sm: 'none' }}
                                justifyContent="center"
                                width="100%"
                                mt={10}
                            >
                                {mobileActions}
                            </Box>
                        )}
                    </Box>
                )}
            </Stack>
        </Box>
    );
};

export default PageLayout;
