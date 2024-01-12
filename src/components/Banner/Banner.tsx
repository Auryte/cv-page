'use client';
import { Dictionary } from '@/lib/i18n';
import { Box } from '@/uiKit/Box/Box';
import { Grid } from '@/uiKit/Grid/Grid';
import { Typography } from '@/uiKit/Typography/Typography';
import { getProfileImage } from '@/utils/getImages';
import { image, styles } from './Banner.styles';
import { CustomThemeContext } from '@/providers/CustomThemeProvider';
import { useContext } from 'react';
import { Heading } from '../Heading/Heading';

export const Banner = (props: { dictionary: Dictionary['home'] }) => {
  const { dictionary } = props;
  const { currentTheme } = useContext(CustomThemeContext);

  return (
    <Grid
      container
      justifyContent='space-between'
      sx={{ padding: 6, backgroundColor: 'inherit' }}
    >
      <Grid
        container
        item
        xs={12}
        md={8}
        direction='column'
        justifyContent={'center'}
        alignContent='start'
        display='flex'
        sx={styles.mainWrapper}
      >
        <Typography
          variant='h2'
          sx={styles.headingThree}
        >
          {dictionary.headingThree}
        </Typography>
        <Typography
          variant='h1'
          sx={styles.mainHeading}
        >
          {dictionary.heading}
        </Typography>
        <Heading
          heading={dictionary.headingTwo}
          sx={styles.headingTwo}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        display='flex'
        justifyContent='left'
        sx={styles.imageWrapper}
      >
        <Box
          component='img'
          alt={dictionary.heading}
          src={getProfileImage}
          sx={image(currentTheme)}
        />
      </Grid>
    </Grid>
  );
};
