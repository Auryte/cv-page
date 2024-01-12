export const language = {
  en: 'en',
  lt: 'lt',
} as const;

export type LANGUAGE = keyof typeof language;

type I18nConfig = {
  defaultLanguage: typeof language.en;
  supportedLanguages: LANGUAGE[];
};

export const i18nConfig: I18nConfig = {
  defaultLanguage: language.en,
  supportedLanguages: [language.en, language.lt],
};
