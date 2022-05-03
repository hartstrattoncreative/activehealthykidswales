import * as React from 'react';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Link from 'components/Link';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient } from 'libs/sanity/client.server';
import {
  SanityImageObject,
  SanityImageSource,
} from '@sanity/image-url/lib/types/types';
import Divider from '@mui/material/Divider';
import HeaderNavBar from './partials/HeaderNavBar';
import SvgHamburgerMenu from 'icons/SvgHamburgerIcon';
import { NavigationItem } from 'types';

export type HeaderProps = {
  logo?: SanityImageObject;
  navItems: NavigationItem[];
  title: string;
};

const Header: React.FC<HeaderProps> = (props) => {
  const { logo, navItems = [], title } = props;
  const [navOpen, setNavOpen] = React.useState(false);

  const logoProps = useNextSanityImage(
    sanityClient,
    (logo?.asset as SanityImageSource) ?? null
  );

  const toggleOpenNavMenu = React.useCallback(
    () => setNavOpen((open) => !open),
    []
  );
  const handleCloseNavMenu = React.useCallback(() => setNavOpen(false), []);

  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Container
        sx={{
          maxWidth: { xs: 'none', md: 'xl' },
        }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* LOGO */}
            <Box
              component={Link}
              aria-label="Go to homepage"
              sx={{
                lineHeight: 0,
                mr: 2,
              }}
              href="/"
            >
              {/* <Image {...logoProps} width={44} height={44} layout="fixed" /> */}
              {/* TODO: decide whether to render title */}
              {/* <Box sx={{ marginLeft: -2, zIndex: 1 }}>
                    <Typography sx={{ fontWeight: 900 }} noWrap>
                      {title}
                    </Typography>
                  </Box> */}
            </Box>
            {/* DESKTOP NAV */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                flex: 1,
                marginLeft: 2,
              }}
            >
              <HeaderNavBar navItems={navItems} />
            </Box>
            <Box sx={{ ml: 'auto' }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* MOBILE NAV */}
              <Box
                sx={{
                  display: { xs: 'flex', sm: 'none' },
                  alignItems: 'center',
                }}
              >
                <IconButton
                  color="primary"
                  aria-label="drawer menu hamburger button"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleOpenNavMenu}
                  edge="end"
                  sx={{
                    position: 'relative',
                    '& rect': {
                      transformOrigin: 'center',
                      transition: '0.2s',
                    },
                    ...(navOpen && {
                      '& rect:first-of-type': {
                        transform: 'translate(1.5px, 1.6px) rotateZ(-45deg)',
                      },
                      '& rect:last-of-type': {
                        transform: 'translate(1.5px, -1.2px) rotateZ(45deg)',
                      },
                    }),
                  }}
                >
                  <SvgHamburgerMenu />
                </IconButton>

                <Drawer
                  open={navOpen}
                  onClose={handleCloseNavMenu}
                  anchor="right"
                  ModalProps={{ keepMounted: true }} // https://mui.com/material-ui/react-modal/#performance
                  PaperProps={{
                    elevation: 0,
                    sx: { marginTop: { xs: '48px', sm: '64px' } },
                  }}
                >
                  <Box
                    sx={{ width: '75vw', minWidth: 250 }}
                    role="presentation"
                    onClick={handleCloseNavMenu}
                    onKeyDown={handleCloseNavMenu}
                  >
                    <List>
                      {navItems.map((navItem) => (
                        <ListItem
                          button
                          component={Link}
                          key={navItem.slug.current}
                          href={`/${navItem.slug.current}`}
                          color="common.white"
                          underline="none"
                          fontWeight={700}
                          sx={{ padding: 1 }}
                        >
                          {navItem.title}
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Drawer>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
      <Divider sx={{ opacity: 0.5 }} />
    </AppBar>
  );
};

export default Header;
