import { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import { FC, PropsWithChildren } from 'react';

export type MenuItemComponent = FC<PropsWithChildren<MuiMenuItemProps>>;
