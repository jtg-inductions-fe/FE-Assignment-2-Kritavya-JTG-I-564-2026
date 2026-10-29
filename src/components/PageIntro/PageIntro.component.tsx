import { Stack, Typography } from '@mui/material';

import { PageEyebrowAccent, PageHeadingLine } from './PageIntro.styles';
import type { PageIntroProps } from './PageIntro.types';

const PageIntro = ({
    eyebrow,
    heading,
    description,
    actions,
    children,
}: PageIntroProps) => (
    <Stack width="100%">
        <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
            <PageEyebrowAccent />
            <Typography
                variant="overline"
                fontSize="1.375rem"
                lineHeight="2rem"
                fontWeight={700}
                letterSpacing="0.05em"
                color="text.secondary"
            >
                {eyebrow}
            </Typography>
        </Stack>

        <Stack component="h1" spacing={{ xs: 0.75, sm: 1 }} m={0} p={0}>
            {heading.map((line, index) => (
                <PageHeadingLine
                    key={`${line.text}-${index}`}
                    outlined={line.outlined}
                >
                    {line.text}
                </PageHeadingLine>
            ))}
        </Stack>

        {description && (
            <Typography
                mt={3}
                maxWidth={680}
                color="text.secondary"
                fontSize="1.5rem"
                lineHeight={1.6}
            >
                {description}
            </Typography>
        )}

        {(actions || children) && (
            <Stack direction="row" flexWrap="wrap" gap={2} mt={8}>
                {actions}
                {children}
            </Stack>
        )}
    </Stack>
);

export default PageIntro;
