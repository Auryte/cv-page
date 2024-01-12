'use client';

import { secondHeading } from './Heading.styles';
import { useContext } from 'react';
import { CustomThemeContext } from '@/providers/CustomThemeProvider';
import { Grid } from '@/uiKit/Grid/Grid';
import { Typography } from '@/uiKit/Typography/Typography';
import { HeadingComponent } from './Heading.types';

export const Heading: HeadingComponent = (props) => {
  const { heading, sx } = props;
  const { currentTheme } = useContext(CustomThemeContext);
  return (
    <Grid
      container
      item
      spacing={3}
    >
      <Typography
        variant='h2'
        sx={{ ...secondHeading(currentTheme), ...sx }}
      >
        {heading}
      </Typography>
    </Grid>
  );
};
