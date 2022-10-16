import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';

const SvgHamburgerMenu: React.FC<SvgIconProps> = (props) => {
  const theme = useTheme();

  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <rect
        x={1}
        y={5}
        width={14}
        height={1.5}
        rx={1}
        fill={theme.palette.primary.main}
      />
      <rect
        x={1}
        y={9}
        width={14}
        height={1.5}
        rx={1}
        fill={theme.palette.primary.main}
      />
    </SvgIcon>
  );
};

export default SvgHamburgerMenu;
