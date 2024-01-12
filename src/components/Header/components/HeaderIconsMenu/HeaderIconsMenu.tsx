'use client';

import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
import { THEME_NAME } from '@/constants';
import { CustomThemeContext } from '@/providers/CustomThemeProvider';
import { Button } from '@/uiKit/Button/Button';
import { Grid } from '@/uiKit/Grid/Grid';
import { Icon } from '@/uiKit/Icon/Icon';
import React, { useContext, useCallback } from 'react';

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
        sx={{ maxWidth: '32px', minWidth: '32px' }}
      >
        {currentTheme === THEME_NAME.DARK ? (
          <Icon
            name='lightTheme'
            sx={{ width: '24px', height: '24px', color: 'text.main' }}
          />
        ) : (
          <Icon
            name='darkTheme'
            sx={{ width: '16px', height: '16px', color: 'text.main' }}
          />
        )}
      </Button>
      <LocaleSwitcher />
    </Grid>
  );
};
