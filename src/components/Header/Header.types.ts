import { Dictionary } from '@/lib/i18n';
import { HeaderConfigTypes } from './config/headerOptions.config';
import { FC } from 'react';


export type HeaderTypes = {
  dictionary: Dictionary['headerMenu'];
  defaultPage?: string;
  pages: HeaderConfigTypes[];
};

export type HeaderComponent = FC<HeaderTypes>

export type HeaderTabBarTypes = {
  defaultPage?: string;
  dictionary: Dictionary['headerMenu'];
  pages?: HeaderConfigTypes[];
};

export type HeaderTabBarComponent = FC<HeaderTabBarTypes>