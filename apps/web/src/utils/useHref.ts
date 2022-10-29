import * as React from 'react';
import { useRouter, NextRouter } from 'next/router';
import { ActionTypeProps } from 'types';
import prependSlash from 'utils/prependSlash';

export default function useHref(args?: ActionTypeProps): {
  href: string;
  asPath: NextRouter['asPath'];
} {
  const { asPath } = useRouter();
  const href = React.useMemo(() => {
    let hrefFromActionType = '';
    if (args?.actionType) {
      switch (args.actionType) {
        case 'url':
          hrefFromActionType = args.url ?? '';
          break;
        case 'internalPage':
          hrefFromActionType = args.href ?? '';
          break;
        case 'file':
          hrefFromActionType = args.file?.url ?? '';
          break;
        default:
          break;
      }
    }

    return prependSlash(hrefFromActionType) as string;
  }, [args]);

  return { href, asPath };
}
