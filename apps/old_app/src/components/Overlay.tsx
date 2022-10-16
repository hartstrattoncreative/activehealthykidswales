import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import styles from './Overlay.module.scss';

const Overlay: React.FC = (props) => {
  const { children } = props;
  const { asPath } = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.root}>
      <div>
        <a className="button" onClick={handleOpen}>
          {asPath.includes('cy') ? 'Ddarllen mwy' : 'Read more'}
        </a>
      </div>

      <div className={clsx(styles.wrapper, open && styles.visible)}>
        <div>{children}</div>

        <div className={styles.close} onClick={handleClose}>
          <FontAwesomeIcon
            icon={faX}
            style={{ fontSize: 20, marginBottom: 8 }}
          />
          <h6 className="light">{asPath.includes('cy') ? 'Cau' : 'Close'}</h6>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
