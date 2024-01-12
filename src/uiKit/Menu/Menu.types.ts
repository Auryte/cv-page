import { MenuProps as MuimenuProps } from '@mui/material/Menu';
import { FC, PropsWithChildren } from 'react';

export interface MenuProps {
  anchorEl: HTMLElement | null;
  sx?: object;
}

export type MenuComponent = FC<PropsWithChildren<MenuProps & MuimenuProps>>;
