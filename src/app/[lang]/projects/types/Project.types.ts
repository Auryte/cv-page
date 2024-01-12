import { FC } from 'react';

import { Dictionary } from '@/lib/i18n';

export type IdProps = 'weather' | 'insurance' | 'interior' | 'starwars';

export type ProjectOptionsProps = {
  id: IdProps;
  image: string;
  link: string;
  words: string[];
  chapters?: string[];
};

export type ProjectProps = {
  dictionary: Dictionary['projects'];
  id: IdProps;
  image: string;
  chapters: string[];
  link: string;
  words: string[];
};

export type ProjectComponent = FC<ProjectProps>;
