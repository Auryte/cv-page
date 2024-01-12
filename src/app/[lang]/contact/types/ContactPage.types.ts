import { Dictionary, LANGUAGE } from '@/lib/i18n';
import { Dispatch, FC } from 'react';

export type ContactFormState = {
  email: string;
  emailError: string;
  error: string;
  isEmailError: boolean;
  isMessageError: boolean;
  isNameError: boolean;
  isSubjectError: boolean;
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

export interface ContactFormProps {
  dictionary: Dictionary['contact'];
  email: string;
  emailError: string;
  error: string;
  isEmailError: boolean;
  isMessageError: boolean;
  isNameError: boolean;
  isSubjectError: boolean;
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
}
export type ContactFormComponent = FC<ContactFormProps>;

interface ContactFormContainerProps {
  dictionary: Dictionary['contact'];
  lang: LANGUAGE;
}

export type ContactFormContainerComponent = FC<ContactFormContainerProps>;
