'use client';

import MuiGrid from '@mui/material/Grid';

import { GridComponent } from './Grid.types';

export const Grid: GridComponent = (props) => {
  const { children, ...gridMuiProps } = props;

  return <MuiGrid {...gridMuiProps}>{children}</MuiGrid>;
};
