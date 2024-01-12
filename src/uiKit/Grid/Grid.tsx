'use client';

import MuiGrid from '@mui/material/Grid';

import { GridComponent } from './Grid.types';

export const Grid: GridComponent = (props) => {
  const {
    children,
    classes,
    columnSpacing,
    columns,
    component,
    container,
    direction,
    item,
    rowSpacing,
    spacing,
    sx,
    wrap,
    zeroMinWidth,
    sm,
    md,
    lg,
    xl,
    ...restGridProps
  } = props;

  return (
    <MuiGrid
      classes={classes}
      columnSpacing={columnSpacing}
      columns={columns}
      component={component}
      container={container}
      direction={direction}
      item={item}
      rowSpacing={rowSpacing}
      spacing={spacing}
      wrap={wrap}
      zeroMinWidth={zeroMinWidth}
      sx={sx}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      {...restGridProps}
    >
      {children}
    </MuiGrid>
  );
};
