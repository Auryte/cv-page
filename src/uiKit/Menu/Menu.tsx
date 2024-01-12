'use client';

import MuiMenu from '@mui/material/Menu';

import { MenuComponent } from './Menu.types';

export const Menu: MenuComponent = (props) => {
  const { anchorEl, children, classes, MenuListProps, sx, ...restMenuProps } = props;

  return (
    <MuiMenu
      anchorEl={anchorEl}
      classes={classes}
      MenuListProps={MenuListProps}
      sx={sx}
      {...restMenuProps}
    >
      {children}
    </MuiMenu>
  );
};
