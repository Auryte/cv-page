import { FC } from 'react';

import { Dictionary, LANGUAGE } from '@/lib/i18n';

export type AboutContentProps = {
  dictionary: Dictionary['about'];
  lang: LANGUAGE;
};

export type AboutContentComponent = FC<AboutContentProps>;
