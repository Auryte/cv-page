'use client';

import { usePathname, useRouter } from 'next/navigation';

import { i18nConfig } from '@/lib/i18n';
import { Box } from '@/uiKit/Box/Box';
import { setLocaleCookie } from '@/utils/cookies';
import { Button } from '@/uiKit/Button/Button';
import { styles } from './LocaleSwitcher.styles';

const LocaleSwitcher = () => {
  const pathName = usePathname();
  const languages = i18nConfig.supportedLanguages as string[];
  const regex = /\/([^/]+)(\/[^/]*)?/;
  const match = pathName ? pathName.match(regex) : ['en'];
  const extractedLocale = match && languages.includes(match[1]) ? match[1] : 'en';
  const neededLocale = languages.find((locale) => locale !== extractedLocale) as string;
  const router = useRouter();

  const handleClick = () => {
    if (!pathName) {
      return '/';
    }
    setLocaleCookie(neededLocale);
    const segments = pathName.split('/');
    segments[1] = neededLocale;
    router.push(segments.join('/'));
    return segments.join('/');
  };

  return (
    <Box sx={styles.wrapper}>
      <Button
        color='inherit'
        onClick={handleClick}
        sx={styles.button}
      >
        {neededLocale}
      </Button>
    </Box>
  );
};

export default LocaleSwitcher;
