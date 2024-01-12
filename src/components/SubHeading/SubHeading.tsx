import React from 'react';

import { Grid } from '@/uiKit/Grid/Grid';
import { Typography } from '@/uiKit/Typography/Typography';

import { styles } from './SubHeading.styles';

export const SubHeading = (props: { heading: string }) => {
  const { heading } = props;

  return (
    <Grid
      item
      sx={styles.wrapper}
    >
      <Typography
        variant='h3'
        sx={styles.title}
      >
        {heading}
      </Typography>
    </Grid>
  );
};
