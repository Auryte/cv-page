import light from './light';
import dark from './dark';
import { THEME_NAME } from '@/constants';

const themes = {
  [THEME_NAME.LIGHT]: light,
  [THEME_NAME.DARK]: dark,
};

export default function getTheme(theme: string) {
  return themes[theme];
}
