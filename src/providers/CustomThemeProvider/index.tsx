'use client';

import React, { createContext, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import getTheme from './themes';
import { THEME_NAME } from '@/constants';
import { getCookie, setThemeCookie } from '@/utils/cookies';

export type ThemeContextData = {
  currentTheme: string;
  setTheme: (name: string) => void;
};

export const CustomThemeContext = createContext<ThemeContextData>({
  currentTheme: THEME_NAME.LIGHT,
  setTheme: () => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

const CustomThemeProvider = ({ children }: ProviderProps) => {
  const themeFromCookie = getCookie('NEXT_THEME')?.toString();
  const themeIsValid = themeFromCookie === THEME_NAME.LIGHT || themeFromCookie === THEME_NAME.DARK;
  const currentTheme = typeof window !== 'undefined' && (themeIsValid ? themeFromCookie : THEME_NAME.LIGHT);
  const [themeName, setThemeName] = useState<string | boolean>(currentTheme);
  const theme = getTheme(themeName as string);

  const setTheme = (name: string) => {
    setThemeCookie(name);
    setThemeName(name);
  };

  const contextValue = {
    currentTheme: themeName as string,
    setTheme,
  };
  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
