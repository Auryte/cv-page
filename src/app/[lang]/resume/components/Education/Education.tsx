import React from 'react';
import { Dictionary } from '@/lib/i18n';
import { Grid } from '@/uiKit/Grid/Grid';
import { Typography } from '@/uiKit/Typography/Typography';
import { styles } from './Education.styles';
import { educationOptions } from '../../config/educationOptions.config';

export const Education = (props: { dictionary: Dictionary['resume'] }) => {
  const { dictionary } = props;
  return (
    <Grid
      container
      item
      direction='column'
      md={4}
      sx={styles.sectionWrapper}
    >
      {educationOptions(dictionary).map(({ subTitle, title }) => (
        <React.Fragment key={title}>
          <Typography sx={styles.title}>{title}</Typography>
          <Typography sx={styles.subTitle}>{subTitle}</Typography>
        </React.Fragment>
      ))}
    </Grid>
  );
};
