import * as z from 'zod';

import { Dictionary } from '@/lib/i18n';

export const contactDataSchema = (dictionary: Dictionary['contact']) =>
  z.object({
    name: z
      .string()
      .trim()
      .min(1, dictionary.nameErrorMessageMin)
      .max(30, dictionary.nameErrorMessageMax)
      .refine(
        (value) => /^[a-zA-ZĄąČčĖėĮįŠšĘęŲųŪūžŽ]+[-'s]?[a-zA-ZĄąČčĖėĮįŠšĘęŲųŪūžŽ ]+$/.test(value),
        dictionary.nameErrorMessageAlph,
      ),
    email: z.string().min(1, dictionary.emailErrorMessageMin).email(dictionary.emailErrorMessage),
    subject: z.string().trim().min(3, dictionary.subjectErrorMessage).max(100, dictionary.subjectErrorMessage),
    message: z.string().min(5, dictionary.messageErrorMessage).max(250, dictionary.messageErrorMessage),
  });
