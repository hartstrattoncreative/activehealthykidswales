import Typography from '@mui/material/Typography';
import {
  PortableText,
  PortableTextProps,
  PortableTextReactComponents,
} from '@portabletext/react';
import Link from './Link';
import ErrorBoundary from 'components/ErrorBoundary';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import PortableTextLink from 'components/PortableTextLink';

const portableTextToComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <Typography variant="h1" gutterBottom textAlign="center">
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography variant="h2" gutterBottom textAlign="center">
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography variant="h3" gutterBottom textAlign="center">
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography variant="h4" gutterBottom textAlign="center">
        {children}
      </Typography>
    ),
    h5: ({ children }) => (
      <Typography variant="h5" gutterBottom textAlign="center">
        {children}
      </Typography>
    ),
    h6: ({ children }) => (
      <Typography variant="h6" gutterBottom textAlign="center">
        {children}
      </Typography>
    ),
    body1: ({ children }) => (
      <Typography variant="body1">{children}</Typography>
    ),
    normal: ({ children, value }) => (
      <Typography variant="body1" paragraph>
        {children}
      </Typography>
    ),
    body2: ({ children }) => (
      <Typography variant="body2">{children}</Typography>
    ),
    subtitle1: ({ children }) => {
      return <Typography variant="subtitle1">{children}</Typography>;
    },
    subtitle2: ({ children }) => (
      <Typography variant="subtitle2">{children}</Typography>
    ),
    overline: ({ children }) => (
      <Typography variant="overline">{children}</Typography>
    ),
    caption: ({ children }) => (
      <Typography variant="caption">{children}</Typography>
    ),
  },
  marks: {
    color: ({ children, value }) => {
      return (
        <Typography
          variant="inherit"
          component="span"
          color={value?.color ?? 'inherit'}
        >
          {children}
        </Typography>
      );
    },
    portableTextLink: ({ value, children }) => (
      <PortableTextLink {...value}>{children}</PortableTextLink>
    ),
    link: ({ children, value, markType, markKey, renderNode, ...rest }) => (
      <Link
        href={(value as { url: string })?.url ?? ''}
        underline="hover"
        target="_blank"
        rel="noreferrer noopener"
        {...rest}
      >
        {children}
      </Link>
    ),
    internalLink: ({
      children,
      value,
      markType,
      markKey,
      renderNode,
      ...rest
    }) => {
      if (!value.path) {
        return null;
      }

      return (
        <Link
          href={value.path}
          {...(value.openInTab && {
            target: '_blank',
          })}
          {...rest}
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      // @ts-ignore - dynamically importing breaks the types and sets component as invalid prop
      <List component="ul" sx={{ listStyle: 'disc', pl: 2 }}>
        {children}
      </List>
    ),
    number: ({ children }) => (
      // @ts-ignore - dynamically importing breaks the types and sets component as invalid prop
      <List component="ol" sx={{ listStyle: 'number', pl: 2 }}>
        {children}
      </List>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <ListItem
        disableGutters
        dense
        sx={{
          display: 'list-item',
          padding: 0,
          borderRadius: '0px',
          overflow: 'visible',
          minHeight: 'unset',
          marginBottom: 1,
        }}
      >
        {children}
      </ListItem>
    ),
    number: ({ children }) => (
      <ListItem
        disableGutters
        dense
        sx={{
          display: 'list-item',
          padding: 0,
          borderRadius: '0px',
          overflow: 'visible',
          minHeight: 'unset',
          marginBottom: 1,
        }}
      >
        {children}
      </ListItem>
    ),
  },
  hardBreak: false,
};

export type RenderPortableTextProps = PortableTextProps;

export default function RenderPortableText(props: RenderPortableTextProps) {
  const { value, ...rest } = props;

  return (
    <ErrorBoundary>
      <PortableText
        value={value}
        components={portableTextToComponents}
        {...rest}
      />
    </ErrorBoundary>
  );
}
