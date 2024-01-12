'use client';

import React, { useCallback, useContext } from 'react';

import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
import { THEME_NAME } from '@/constants';
import { CustomThemeContext } from '@/providers/CustomThemeProvider';
import { Button } from '@/uiKit/Button/Button';
import { Grid } from '@/uiKit/Grid/Grid';
import { Icon } from '@/uiKit/Icon/Icon';

import { styles } from './HeaderIconsMenu.styles';

export const HeaderIconsMenu = () => {
  const { currentTheme, setTheme } = useContext(CustomThemeContext);

  const handleThemeChange = useCallback(() => {
    if (currentTheme === THEME_NAME.DARK) {
      setTheme(THEME_NAME.LIGHT);
    } else {
      setTheme(THEME_NAME.DARK);
    }
  }, [currentTheme, setTheme]);

  return (
    <Grid
      container
      item
      justifyContent='space-evenly'
      alignItems='center'
      sx={{ backgroundColor: 'inherit' }}
    >
      <Button
        onClick={handleThemeChange}
        sx={styles.button}
      >
        {currentTheme === THEME_NAME.DARK ? (
          <Icon
            name='lightTheme'
            sx={styles.iconLight}
          />
        ) : (
          <Icon
            name='darkTheme'
            sx={styles.iconDark}
          />
        )}
      </Button>
      <LocaleSwitcher />
    </Grid>
  );
};
