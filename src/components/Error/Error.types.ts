import { Dictionary } from '@/lib/i18n';
import { FC } from 'react';

export interface ErrorProps {
  dictionary: Dictionary['errorPage'];
  error: Error & { digest?: string };
  reset: () => void;
}

export type ErrorComponent = FC<ErrorProps>;
