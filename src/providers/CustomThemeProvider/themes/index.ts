import { THEME_NAME } from '@/constants';

import dark from './dark';
import light from './light';

const themes = {
  [THEME_NAME.LIGHT]: light,
  [THEME_NAME.DARK]: dark,
};

export default function getTheme(theme: string) {
  return themes[theme];
}
