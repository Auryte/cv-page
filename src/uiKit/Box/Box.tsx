'use client';

import MuiBox from '@mui/material/Box';

import { BoxComponent } from './Box.types';

export const Box: BoxComponent = (props) => {
  const { children, component, sx, ...restBoxProps } = props;

  return (
    <MuiBox
      component={component}
      sx={sx}
      {...restBoxProps}
    >
      {children}
    </MuiBox>
  );
};
