import Typography from '@mui/material/Typography';
import Image from 'next/image';
import {
  PortableText,
  PortableTextProps,
  PortableTextReactComponents,
} from '@portabletext/react';
import Blockquote from 'components/Blockquote';
import Link from 'components/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient } from 'libs/sanity/client.server';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const portableTextToComponents: Partial<PortableTextReactComponents> = {
  types: {
    figure: ({ value }) => {
      const src = useNextSanityImage(
        sanityClient,
        (value as { asset: SanityImageObject })?.asset
      );
      return <Image src={src} />;
    },
  },
  block: {
    h1: ({ children }) => (
      <Typography component="h1" variant="h1">
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography component="h2" variant="h2">
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography component="h3" variant="h3">
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography component="h4" variant="h4">
        {children}
      </Typography>
    ),
    h5: ({ children }) => (
      <Typography component="h5" variant="h5">
        {children}
      </Typography>
    ),
    h6: ({ children }) => (
      <Typography component="h6" variant="h6">
        {children}
      </Typography>
    ),
    body1: ({ children }) => (
      <Typography variant="body1">{children}</Typography>
    ),
    body2: ({ children }) => (
      <Typography variant="body2">{children}</Typography>
    ),
    subtitle1: ({ children }) => (
      <Typography variant="subtitle1">{children}</Typography>
    ),
    subtitle2: ({ children }) => (
      <Typography variant="subtitle2">{children}</Typography>
    ),
    overline: ({ children }) => (
      <Typography variant="overline">{children}</Typography>
    ),
    caption: ({ children }) => (
      <Typography variant="caption">{children}</Typography>
    ),
    blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  },
  marks: {
    link: ({ children, value, ...rest }) => (
      <Link
        href={(value as { href: string })?.href}
        underline="hover"
        target="_blank"
        rel="noreferrer noopener"
        {...rest}
      >
        {children} <OpenInNewIcon fontSize="inherit" />
      </Link>
    ),
    internalLink: ({ children, value, ...rest }) => (
      <Link
        href={
          (value as { route: { slug: { current: string } } }).route.slug.current
        }
        {...rest}
      >
        {children}
      </Link>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <List component="ul" sx={{ listStyle: 'disc', pl: 2 }}>
        {children}
      </List>
    ),
    number: ({ children }) => (
      <List component="ol" sx={{ listStyle: 'number', pl: 2 }}>
        {children}
      </List>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <ListItem disableGutters dense sx={{ display: 'list-item' }}>
        {children}
      </ListItem>
    ),
    number: ({ children }) => (
      <ListItem disableGutters dense sx={{ display: 'list-item' }}>
        {children}
      </ListItem>
    ),
  },
};

const RenderPortableText: React.FC<PortableTextProps> = (props) => {
  const { value, ...rest } = props;

  return (
    <PortableText
      value={value}
      components={portableTextToComponents}
      {...rest}
    />
  );
};

export default RenderPortableText;
