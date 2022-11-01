import * as React from 'react';
import { GetStaticProps } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// TODO: render from CMS -- we just need to ensure that we have the data-testid on the container for e2e tests
export default function Custom404() {
  return (
    <Container maxWidth="md" data-testid="404">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <Typography variant="h5" component="h1" align="center">
            {`404`}
          </Typography>
          <Typography variant="body2">This page could not be found</Typography>
        </Stack>
      </Box>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const getSiteContent = (await import('sanity/queries/getSiteContent'))
    .default;
  const siteContent = await getSiteContent(preview);

  return {
    props: {
      preview,
      ...siteContent,
    },
  };
};
