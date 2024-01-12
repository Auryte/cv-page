import { Dictionary } from '@/lib/i18n';

export const EDUCATION_OPTIONS = (dictionary: Dictionary['resume']) => [
  {
    subTitle: dictionary.faculty,
    title: dictionary.ktu,
  },
  {
    subTitle: dictionary.program,
    title: dictionary.codeAcademy,
  },
];
