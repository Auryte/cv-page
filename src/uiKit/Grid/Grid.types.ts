import { GridClasses } from '@mui/material';
import { GridDirection, GridSpacing, GridWrap, GridProps as MUIGridProps } from '@mui/material/Grid';
import { FC, PropsWithChildren } from 'react';

type Breakpoints = boolean | 'auto' | number;

export type ResponsiveStyleValue<T> = T | Array<T | null> | { [key: string]: T | null };

export interface GridProps {
  classes?: Partial<GridClasses>;
  columnSpacing?: ResponsiveStyleValue<GridSpacing>;
  columns?: ResponsiveStyleValue<number>;
  component?: any;
  container?: boolean;
  direction?: ResponsiveStyleValue<GridDirection>;
  item?: boolean;
  rowSpacing?: ResponsiveStyleValue<GridSpacing>;
  spacing?: ResponsiveStyleValue<GridSpacing>;
  sx?: object;
  wrap?: GridWrap;
  zeroMinWidth?: boolean;
  xs?: Breakpoints;
  sm?: Breakpoints;
  md?: Breakpoints;
  lg?: Breakpoints;
  xl?: Breakpoints;
}

export type GridComponent = FC<PropsWithChildren<GridProps & MUIGridProps>>;
