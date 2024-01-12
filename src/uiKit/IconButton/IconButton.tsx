'use client';

import MuiIconButton from '@mui/material/IconButton';

import { IconButtonComponent } from './IconButton.types';

export const IconButton: IconButtonComponent = (props) => {
  const { children, classes, color, disabled, disableFocusRipple, disableRipple, edge, size, sx, ...restMuiProps } =
    props;

  return (
    <MuiIconButton
      classes={classes}
      color={color}
      disabled={disabled}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      edge={edge}
      size={size}
      sx={sx}
      {...restMuiProps}
    >
      {children}
    </MuiIconButton>
  );
};
