import * as React from 'react';
import Cookies from 'js-cookie';
import RenderPortableText from 'components/RenderPortableText';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { useRouter } from 'next/router';
import { LocalePortableText, LocaleString } from 'sanity/types/objects';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

export type CookieConsentProps = {
  message?: LocalePortableText;
  buttonText?: LocaleString;
};

export default function CookieConsent(props: CookieConsentProps) {
  const { message, buttonText } = props;
  const [isOpen, setOpen] = React.useState(false);
  const { locale = 'en' } = useRouter();

  const handleClose = React.useCallback(() => {
    Cookies.set('ahkw-cookie-consent', 'accepted', { expires: 365 });
    setOpen(false);
  }, []);

  React.useLayoutEffect(() => {
    if (!Cookies.get('ahkw-cookie-consent')) {
      setOpen(true);
    }
  }, []);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={isOpen}
      onClose={handleClose}
      {...(buttonText && {
        action: (
          <Button color="primary" onClick={handleClose}>
            {buttonText?.[locale]}
          </Button>
        ),
      })}
    >
      <Alert sx={{ width: '100%' }} severity="info" onClose={handleClose}>
        {message && <RenderPortableText value={message?.[locale]} />}
      </Alert>
    </Snackbar>
  );
}
