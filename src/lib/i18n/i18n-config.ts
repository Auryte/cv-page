export enum LANGUAGE {
  en = 'en',
  lt = 'lt',
}

type I18nConfig = {
  defaultLanguage: LANGUAGE.en;
  supportedLanguages: LANGUAGE[];
};

export const i18nConfig: I18nConfig = {
  defaultLanguage: LANGUAGE.en,
  supportedLanguages: [LANGUAGE.en, LANGUAGE.lt],
};
