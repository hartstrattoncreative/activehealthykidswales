import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient } from 'libs/sanity/client.server';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Link from 'components/Link';
import { styled } from '@mui/material/styles';
import { NavigationItem } from 'types';

export type FooterProps = {
  navItems: NavigationItem[];
};

const FooterNav = styled('ul')(({ theme }) => ({
  padding: 0,
  margin: 0,
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),

  [theme.breakpoints.up('sm')]: {
    justifyContent: 'flex-start',
    marginBottom: 0,
  },

  '& li': {
    color: theme.palette.text.secondary,
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
    '& > a, & > div': {
      display: 'inline-block',
      color: 'inherit',
      whiteSpace: 'nowrap',

      '&:hover, &:focus': {
        color: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          color: 'inherit',
        },
      },
    },
  },
}));

const Footer: React.FC<FooterProps> = (props) => {
  const { navItems = [] } = props;

  return (
    <footer>
      <Divider />

      <Container maxWidth="xl">
        <FooterNav role="footermenu">
          {navItems.map((navItem, i) => (
            <React.Fragment key={navItem.slug.current}>
              <li role="none">
                <Link
                  href={`/${navItem.slug.current}`}
                  role="menuitem"
                  variant="body2"
                  underline="hover"
                >
                  {navItem.title}
                </Link>
              </li>
              {i < navItems.length - 1 && (
                <Divider flexItem orientation="vertical" variant="fullWidth" />
              )}
            </React.Fragment>
          ))}
        </FooterNav>
      </Container>
    </footer>
  );
};

export default Footer;
