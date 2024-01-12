'use client';

import { usePathname } from 'next/navigation';
import type { FC, PropsWithChildren } from 'react';

import { LANGUAGE } from '@/lib/i18n';
import ThemeRegistry from '@/providers/ThemeRegistry/ThemeRegistry';

import { roboto } from './fonts';

export interface RootLayoutProps {
  params: {
    lang: LANGUAGE;
  };
}

export type RootLayoutComponentTypes = FC<PropsWithChildren<RootLayoutProps>>;

const RootLayout: RootLayoutComponentTypes = (props) => {
  const { children } = props;

  const langFromPathname = usePathname().split('/')[1];

  return (
    <html lang={langFromPathname}>
      <body className={roboto.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
