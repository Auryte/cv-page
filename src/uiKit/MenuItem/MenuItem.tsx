'use client';

import MuiMenuItem from '@mui/material/MenuItem';

import { MenuItemComponent } from './MenuItem.types';

export const MenuItem: MenuItemComponent = (props) => {
  const { children, classes, sx, ...restMenuItemProps } = props;

  return (
    <MuiMenuItem
      classes={classes}
      sx={sx}
      {...restMenuItemProps}
    >
      {children}
    </MuiMenuItem>
  );
};
