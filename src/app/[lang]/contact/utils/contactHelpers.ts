import * as z from 'zod';

import { type LANGUAGE, language } from '@/lib/i18n';

export const getTemplateId = (lang: LANGUAGE) => {
  const isLtLanguage = lang === language.lt;

  return isLtLanguage ? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID : process.env.NEXT_PUBLIC_EMAILJS_ENG_TEMPLATE_ID;
};

export const filteredError = (path: string, errors: z.ZodIssue[]) =>
  errors?.filter((error) => error.path[0] === path)[0];
