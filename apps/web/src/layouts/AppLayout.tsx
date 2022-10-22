import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import { List as MenuIcon } from 'phosphor-react';
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

export type AppLayoutProps = {
  children?: React.ReactNode;
};

const localeStrings = {
  en: 'English',
  cy: 'Welsh',
};

function getLocaleString(locale: string) {
  return localeStrings[locale as keyof typeof localeStrings] as string;
}

export default function AppLayout(props: AppLayoutProps) {
  const { children } = props;
  const { locale, locales, asPath } = useRouter();
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuOpen(true);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" onClick={handleClick}>
            <MenuIcon color="#ffffff" />
          </IconButton>
          <Box flexGrow={1} />
        </Toolbar>
      </AppBar>
      <Box component="main" minHeight="100vh">
        {children}
      </Box>

      <Box component="footer">
        <Box p={1}>main footer stuffs here</Box>
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
              <Link href={asPath} locale={l} variant="caption">
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
      <Drawer open={isMenuOpen} onClose={handleClose}>
        <List>
          {locales?.map((l) => (
            <ListItemButton
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
