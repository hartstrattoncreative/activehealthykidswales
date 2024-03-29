import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
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
import MenuIcon from '@mui/icons-material/Menu';

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
  settings?: any;
  preview?: boolean;
};

const localeStrings = {
  en: 'English',
  cy: 'Welsh',
};

function getLocaleString(locale: string) {
  return localeStrings[locale as keyof typeof localeStrings] as string;
}

export default function AppLayout(props: AppLayoutProps) {
  const { children, footer, appbar, settings, preview = false } = props;
  const { locale = 'en', locales, asPath } = useRouter();
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuOpen(true);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {preview && (
        <Stack
          spacing={1}
          direction="row"
          alignItems="baseline"
          justifyContent="center"
          bgcolor="#009943"
          color="text.secondary"
        >
          <Typography>
            Website is in <i>live preview</i> mode.
          </Typography>
          <Link
            href="/api/exit-preview"
            color="text.secondary"
            prefetch={false}
          >
            disconnect
          </Link>
        </Stack>
      )}
      <AppBar
        position="static"
        sx={{ backgroundColor: '#fff' }}
        variant="outlined"
      >
        <Toolbar>
          <IconButton edge="start" onClick={handleClick} color="primary">
            <MenuIcon />
          </IconButton>
          {settings?.logo && (
            <Box
              component={Link}
              href="/"
              position="relative"
              width={80}
              height={60}
              minWidth={80}
            >
              <Image
                alt={settings.logo.alt}
                src={settings.logo.url}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          )}
          <Box flexGrow={1} />
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" component="main" sx={{ minHeight: '100vh' }}>
        {children}
      </Container>

      <Divider variant="fullWidth" sx={{ py: 2 }} />
      <Box component="footer">
        <Container maxWidth="md">
          <Grid2 py={4} container spacing={4}>
            <Grid2 xs={12} sm={6} spacing={2}>
              {settings?.logo && (
                <Box position="relative" width={80} height={50} minWidth={50}>
                  <Image
                    alt={settings.logo.alt}
                    src={settings.logo.url}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
              )}
              {footer?.footerText && (
                <RenderPortableText value={footer?.footerText[locale]} />
              )}
            </Grid2>
            <Grid2 xs={12} sm={3}>
              <Stack spacing={1}>
                {footer?.links?.map((link: any) => (
                  <Link key={link._key} href={link.href ?? link.url}>
                    {link[locale]}
                  </Link>
                ))}
              </Stack>
            </Grid2>
            <Grid2 xs={12} sm={3}>
              {footer?.indicators?.header && (
                <Typography variant="subtitle1" fontWeight={700}>
                  {footer?.indicators?.header[locale]}
                </Typography>
              )}
              <Stack spacing={1}>
                {footer?.indicators?.indicatorLinks?.map((link: any) => (
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
              {footer?.copyright} © {new Date().getFullYear()}
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

      <CookieConsent {...settings?.cookieConsent} />

      <Drawer open={isMenuOpen} onClose={handleClose}>
        <Stack width={250} height="100%">
          <Toolbar />
          <Stack
            justifyContent="space-between"
            sx={{ flexGrow: 1, color: 'text.secondary' }}
          >
            <List>
              {appbar?.links?.map((link: any) => (
                <ListItemButton
                  key={link._key}
                  component={Link}
                  href={link?.href ?? link?.url}
                  onClick={handleClose}
                >
                  {link[locale]}
                </ListItemButton>
              ))}
            </List>
            <List>
              {locales?.map((l) => (
                <ListItemButton
                  key={l}
                  component={Link}
                  href={asPath}
                  locale={l}
                  onClick={handleClose}
                  dense
                >
                  <ListItemText>{getLocaleString(l)}</ListItemText>
                </ListItemButton>
              ))}
            </List>
          </Stack>
          <Divider
            orientation="horizontal"
            flexItem
            variant="middle"
            color="#299ad6"
            sx={{ mt: 2 }}
          />
          <Typography
            variant="caption"
            textAlign="center"
            color="textSecondary"
            sx={{ p: 1 }}
          >
            {settings?.title}
          </Typography>
        </Stack>
      </Drawer>
    </>
  );
}
