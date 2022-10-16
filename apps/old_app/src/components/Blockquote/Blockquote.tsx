import * as React from 'react';
import Box from '@mui/material/Box';

const Blockquote: React.FC = (props) => {
  const { children, ...rest } = props;
  return (
    <Box
      sx={{
        color: 'grey.400',
        fontStyle: 'italic',
        borderLeftWidth: '1px',
        borderLeftStyle: 'solid',
        borderLeftColor: 'primary.main',
        pl: 1,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Blockquote;
