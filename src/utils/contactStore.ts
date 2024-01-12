import { LANGUAGE } from '@/lib/i18n';
import * as z from 'zod';

export const getTemplateId = (lang: LANGUAGE) => {
  return lang === LANGUAGE.lt
    ? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    : process.env.NEXT_PUBLIC_EMAILJS_ENG_TEMPLATE_ID;
};

export const filteredError = (path: string, errors: z.ZodIssue[]) => {
  return errors?.filter((error) => error.path[0] === path)[0];
};
