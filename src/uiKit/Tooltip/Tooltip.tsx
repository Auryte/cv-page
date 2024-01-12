'use client';

import MuiTooltip from '@mui/material/Tooltip';

import { TooltipComponent } from './Tooltip.types';

export const Tooltip: TooltipComponent = (props) => {
  const { children, sx, title } = props;

  return (
    <MuiTooltip
      title={title}
      sx={sx}
    >
      {children}
    </MuiTooltip>
  );
};
