import { Dictionary, LANGUAGE } from '@/lib/i18n';
import { FC } from 'react';

export type IdProps = 'weather' | 'interior' | 'starwars';

export type ProjectOptionsProps = {
  id: IdProps;
  image: string;
  link: string;
  words: string[];
  chapters?: string[];
};

export interface ProjectProps {
  dictionary: Dictionary['projects'];
  id: IdProps;
  image: string;
  chapters: string[];
  link: string;
  words: string[];
}
export type ProjectComponent = FC<ProjectProps>;
