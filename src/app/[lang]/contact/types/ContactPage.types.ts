import { Dispatch, FC } from 'react';

import { Dictionary, LANGUAGE } from '@/lib/i18n';

export type ContactFormState = {
  email: string;
  emailError: string;
  error: string;
  isSubmitDisabled: boolean;
  message: string;
  messageError: string;
  name: string;
  nameError: string;
  subject: string;
  subjectError: string;
  success: boolean;
};

export type ContactFormSetStateTypes = Dispatch<Partial<ContactFormState>>;

export type ContactFormReducerTypes = (
  prevState: ContactFormState,
  nextState: Partial<ContactFormState>,
) => ContactFormState;

export type UseContactPageStoreType = (
  dictionary: Dictionary['contact'],
  lang: LANGUAGE,
) => {
  state: ContactFormState;
  setState: ContactFormSetStateTypes;
  submit: () => void;
  handleClose: () => void;
};

export type ContactFormProps = {
  dictionary: Dictionary['contact'];
  email: string;
  emailError: string;
  error: string;
  isSubmitDisabled: boolean;
  message: string;
  messageError: string;
  name: string;
  nameError: string;
  onChange: ContactFormSetStateTypes;
  onClose: () => void;
  subject: string;
  subjectError: string;
  submit: () => void;
  success: boolean;
};

export type ContactFormComponent = FC<ContactFormProps>;

type ContactFormContainerProps = {
  dictionary: Dictionary['contact'];
  lang: LANGUAGE;
};

export type ContactFormContainerComponent = FC<ContactFormContainerProps>;
