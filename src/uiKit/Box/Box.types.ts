import { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { FC, PropsWithChildren } from 'react';

export interface BoxProps {
  component?: string;
  sx?: object;
  src?: string;
  alt?: string;
}

export type BoxComponent = FC<PropsWithChildren<BoxProps & MuiBoxProps>>;
