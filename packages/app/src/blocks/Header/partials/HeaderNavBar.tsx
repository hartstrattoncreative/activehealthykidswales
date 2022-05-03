import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Link from 'components/Link';
import { HeaderProps } from '../Header';

export type HeaderNavBarProps = { navItems: HeaderProps['navItems'] };

const Navigation = styled('nav')(({ theme }) => ({
  '& ul': {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    display: 'flex',
  },
  '& li': {
    color: theme.palette.text.primary,
    ...theme.typography.body2,
    fontWeight: 700,
    '& > a, & > div': {
      display: 'inline-block',
      color: 'inherit',
      textDecoration: 'none',
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      transition: 'all 0.3s ease-in-out',
      '&:hover, &:focus': {
        backgroundColor: alpha(theme.palette.primary.dark, 0.25),
        color: theme.palette.primary.light,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'initial',
        },
      },
    },
    '& > div': {
      cursor: 'default',
    },
  },
}));

const HeaderNavBar: React.FC<HeaderNavBarProps> = (props) => {
  const { navItems = [] } = props;

  return (
    <Navigation>
      <ul role="menubar">
        {navItems.map((navItem) => (
          <li role="none" key={navItem.slug.current}>
            <Link href={`/${navItem.slug.current}`} role="menuitem">
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </Navigation>
  );
};

export default HeaderNavBar;
