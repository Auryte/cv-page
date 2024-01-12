'use client';

import dynamic from 'next/dynamic';
import CssBaseline from '@mui/material/CssBaseline';

import NextAppDirEmotionCacheProvider from './EmotionCache';
const CustomThemeProvider = dynamic(() => import('../CustomThemeProvider'), {
  ssr: false,
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <CustomThemeProvider>
        <CssBaseline />
        {children}
      </CustomThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
