'use client';

import { useContext } from 'react';

import { THEME_NAME } from '@/constants';
import { CustomThemeContext } from '@/providers/CustomThemeProvider';
import { Grid } from '@/uiKit/Grid/Grid';
import { Icon } from '@/uiKit/Icon/Icon';
import { Typography } from '@/uiKit/Typography/Typography';

import { companyOptionsProps } from '../../config/companyOptions.config';
import { styles } from '../WorkExperience/WorkExperience.styles';

export const Company = (props: { options: companyOptionsProps }) => {
  const { currentTheme } = useContext(CustomThemeContext);
  const { options } = props;

  return (
    <>
      <Grid
        container
        justifyContent='flex-start'
        columnGap='8px'
        sx={{
          paddingTop: '24px',
          color: 'text.main',
        }}
      >
        <Icon
          name='calendar'
          fontSize='medium'
        />
        <Typography>{options.period}</Typography>
        <Icon
          name='place'
          color='inherit'
          sx={currentTheme === THEME_NAME.LIGHT ? { fill: '#212121' } : { fill: '#FFFFFF' }}
        />
        <Typography>{options.place}</Typography>
      </Grid>
      <Typography sx={styles.title}>{options.name}</Typography>
      <Typography sx={styles.role}>{options.role}</Typography>
    </>
  );
};
