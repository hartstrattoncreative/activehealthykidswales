import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import Link from 'components/Link';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import dynamic from 'next/dynamic';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2';
import RenderPortableText from 'components/RenderPortableText';

const CookieConsent = dynamic(
  () =>
    import(
      /* webpackChunkName: "components/CookieConsent" */
      'components/CookieConsent'
    ),
  { ssr: false }
);

export type AppLayoutProps = {
  children?: React.ReactNode;
  footer?: any;
  appbar?: any;
};

const localeStrings = {
  en: 'English',
  cy: 'Welsh',
};

function getLocaleString(locale: string) {
  return localeStrings[locale as keyof typeof localeStrings] as string;
}

export default function AppLayout(props: AppLayoutProps) {
  const { children, footer, appbar } = props;
  const { locale = 'en', locales, asPath } = useRouter();
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuOpen(true);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  console.log(footer, appbar);

  return (
    <>
      {/* <AppBar>
        <Toolbar>
          <IconButton edge="start" onClick={handleClick}>
          </IconButton>
          <Box flexGrow={1} />
        </Toolbar>
      </AppBar> */}
      <Container maxWidth="md" component="main" sx={{ minHeight: '100vh' }}>
        {children}
      </Container>

      <Divider variant="fullWidth" sx={{ py: 2 }} />
      <Box component="footer">
        <Container maxWidth="md">
          <Grid2 py={4} container spacing={2}>
            <Grid2 xs={6}>
              {footer?.footerText && (
                <RenderPortableText value={footer?.footerText[locale]} />
              )}
            </Grid2>
            <Grid2 xs={6}>
              <Stack spacing={1}>
                {footer?.links?.map((link: any) => (
                  <Link key={link._key} href={link.href ?? link.url}>
                    {link[locale]}
                  </Link>
                ))}
              </Stack>
            </Grid2>
          </Grid2>
        </Container>
        <Divider variant="fullWidth" />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={1}
        >
          <Stack direction="row" spacing={1}>
            <Typography variant="caption">
              Copyright © {new Date().getFullYear()}
            </Typography>
            <Divider orientation="vertical" flexItem variant="middle" />
            {locales?.map((l) => (
              <Link key={l} href={asPath} locale={l} variant="caption">
                {getLocaleString(l)}
              </Link>
            ))}
          </Stack>
          <Typography variant="caption">
            Made by{' '}
            <Link href="https://hsc.studio" target="_blank">
              hsc.studio
            </Link>
          </Typography>
        </Box>
      </Box>

      <CookieConsent />
      <Drawer open={isMenuOpen} onClose={handleClose}>
        <List>
          {locales?.map((l) => (
            <ListItemButton
              key={l}
              selected={locale === l}
              component={Link}
              href={asPath}
              locale={l}
              onClick={handleClose}
            >
              <ListItemText>{getLocaleString(l)}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
