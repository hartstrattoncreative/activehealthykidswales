import * as React from 'react';
import Link, { LinkProps } from 'components/Link';
import useHref from 'utils/useHref';
import { ActionTypeProps } from 'types';

export type PortableTextLinkProps = ActionTypeProps & Pick<LinkProps, 'color'>;

export default React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<PortableTextLinkProps>
>(function PortableTextLink(props, ref) {
  const { children, color, ...rest } = props;
  const { href } = useHref(rest);

  return (
    <Link ref={ref} href={href} {...(color && { color })}>
      {children}
    </Link>
  );
});
