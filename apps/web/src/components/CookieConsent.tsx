import * as React from 'react';
import Cookies from 'js-cookie';
import RenderPortableText from 'components/RenderPortableText';
import { PortableTextProps } from '@portabletext/react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export type CookieConsentProps = {
  message?: PortableTextProps['value'];
};

export default function CookieConsent(props: CookieConsentProps) {
  const { message } = props;
  const [isOpen, setOpen] = React.useState(false);

  const handleClose = React.useCallback(() => {
    Cookies.set(`ahkw-cookie-consent`, 'accepted', { expires: 365 });
    setOpen(false);
  }, []);

  React.useLayoutEffect(() => {
    if (!Cookies.get(`ahkw-cookie-consent`)) {
      setOpen(true);
    }
  }, []);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={isOpen}
      action={
        <>
          <Button>Read More</Button>
          <Button color="primary" onClick={handleClose}>
            Accept
          </Button>
        </>
      }
    >
      {message && <RenderPortableText value={message} />}
    </Snackbar>
  );
}
