import { ReactNode } from 'react';

import { Dictionary } from '@/lib/i18n';

export type ArticleProps = {
  dictionary:
    | Dictionary['resume']
    | Dictionary['projects']['interior']
    | Dictionary['projects']['weather']
    | Dictionary['projects']['starwars']
    | Dictionary['contact'];
  sxTitle?: object;
  sxWrapper?: object;
};

export type ArticleComponent = (props: ArticleProps) => ReactNode;
