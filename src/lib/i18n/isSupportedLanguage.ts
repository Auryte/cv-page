import { i18nConfig, LANGUAGE } from '@/lib/i18n/i18n-config';

export const isSupportedLanguage = (lang?: string): lang is LANGUAGE =>
  i18nConfig.supportedLanguages.some((language) => language === lang);
