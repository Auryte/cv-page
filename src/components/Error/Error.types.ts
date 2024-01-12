import { FC } from 'react';

import { Dictionary } from '@/lib/i18n';

export type ErrorProps = {
  dictionary: Dictionary['errorPage'];
  error: Error & { digest?: string };
  reset: () => void;
};

export type ErrorComponent = FC<ErrorProps>;
