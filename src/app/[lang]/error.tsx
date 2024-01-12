'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ErrorContent } from '@/components/Error/Error';
import { Dictionary, getDictionary, LANGUAGE } from '@/lib/i18n';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function HomePageError(props: ErrorProps) {
  const { error, reset } = props;
  const [dictionary, setDictionary] = useState<Dictionary['errorPage']>();
  const currentPage = usePathname();
  const lang = currentPage?.split('/')[1] as LANGUAGE;

  const findDictionary = async (language: LANGUAGE) => {
    const { errorPage } = await getDictionary(language);
    setDictionary(errorPage);
  };

  useEffect(() => {
    void findDictionary(lang);
  }, [lang]);

  if (!dictionary) {
    return null;
  }

  return (
    <ErrorContent
      dictionary={dictionary}
      error={error}
      reset={reset}
    />
  );
}
