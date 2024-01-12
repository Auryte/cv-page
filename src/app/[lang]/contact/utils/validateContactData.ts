import { Dictionary } from '@/lib/i18n';

import { contactDataSchema } from './contactDataSchema';

export const validateContactData = (payload: unknown, dictionary: Dictionary['contact']) => {
  const validationResult = contactDataSchema(dictionary).safeParse(payload);

  if (validationResult.success) {
    const { data } = validationResult;

    return { data };
  } else {
    const { errors } = validationResult.error;

    return { errors };
  }
};
