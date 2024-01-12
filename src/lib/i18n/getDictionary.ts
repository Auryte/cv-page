// import 'server-only'

import { i18nConfig, isSupportedLanguage, LANGUAGE } from '@/lib/i18n';
import { DictionaryModule } from '@/lib/i18n/types';

const dictionaries: Record<LANGUAGE, () => Promise<DictionaryModule>> = {
  en: () => import('../../dictionaries/en/en.json'),
  lt: () => import('../../dictionaries/lt/lt.json'),
};

export const getDictionary = async (language?: LANGUAGE) => {
  const lang = isSupportedLanguage(language) ? language : i18nConfig.defaultLanguage;
  const langModule = await dictionaries[lang]();
  return langModule.default;
};
