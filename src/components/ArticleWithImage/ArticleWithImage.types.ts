import { SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

import { Dictionary } from '@/lib/i18n';

export type ArticleWithImageProps = {
  dictionary:
    | Dictionary['projects']['interior']
    | Dictionary['projects']['weather']
    | Dictionary['projects']['starwars']
    | Dictionary['about'];
  chapters: string[];
  image: string;
  sxImage?: object & SxProps<Theme>;
  sxBlock?: object;
  sxTypo?: object;
  sxArticleWrapper?: object;
  link: string;
};

export type ArticleWithImageComponent = (props: ArticleWithImageProps) => ReactNode;
