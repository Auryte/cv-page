import { Dictionary } from '@/lib/i18n';
import { ReactNode } from 'react';

export interface ArticleProps {
    dictionary:
    | Dictionary['resume']
    | Dictionary['projects']['interior']
    | Dictionary['projects']['weather']
    | Dictionary['projects']['starwars']
    | Dictionary['contact'];
  sxTitle?: object;
  sxWrapper?: object;
}

export type ArticleComponent = (props: ArticleProps) => ReactNode;
